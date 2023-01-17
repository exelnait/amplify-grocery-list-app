const AWS = require('aws-sdk');
const crypto = require('crypto');
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
exports.handler = async (event, context) => {
    await ddb.putItem({
        TableName: process.env.API_GROCERYLISTDEMO_USERTABLE_NAME,
        Item: {
            '__typename': { S: 'User' },
            'id': { S: crypto.randomUUID() },
            'email': {S : event.request.userAttributes.email },
            'createdAt': { S: new Date.now().toISOString() },
            'updatedAt': { S: new Date.now().toISOString() },
            '_lastChangedAt': { N: getTimestampInSeconds() },
            '_version': { N: 1 },
        }
    }).promise();
    return event
};

function getTimestampInSeconds() {
    return Math.floor(Date.now() / 1000)
}