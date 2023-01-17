// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, List, Item } = initSchema(schema);

export {
  User,
  List,
  Item
};