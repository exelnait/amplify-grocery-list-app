import { Injectable } from '@angular/core';
import {AuthenticatorService} from "@aws-amplify/ui-angular";
import {Auth} from "aws-amplify";
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
    this.cognitoUser = await Auth.currentAuthenticatedUser()
    const email = this.cognitoUser.attributes.email;
    var result = await DataStore.query(User, u => u.email.eq(email));
    if (result.length > 0) {
      return result[0];
    } else {
      return null;
    }
  }
}
