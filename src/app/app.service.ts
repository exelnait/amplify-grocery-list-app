import { Injectable } from '@angular/core';
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {API, Auth, graphqlOperation} from "aws-amplify";
import {DataStore} from "@aws-amplify/datastore";
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public authenticator: AuthenticatorService) { }

  cognitoUser;
  user;

  async getUser(): Promise<User> {
    this.cognitoUser = await Auth.currentAuthenticatedUser();
    console.log('cognitoUser', this.cognitoUser);
    const email = this.cognitoUser.attributes.email;
    var result: any = await API.graphql(graphqlOperation(`
    {
      listUsers(filter: {email: {eq: "${email}"}}) {
        items {
          id
          email
        }
      }
    }
    `));
    console.log(result)
    if (result?.data?.listUsers?.items.length > 0) {
      return result.data.listUsers.items[0];
    } else {
      return null;
    }
  }
}
