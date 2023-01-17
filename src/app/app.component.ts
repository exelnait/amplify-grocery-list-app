import { Component } from '@angular/core';
import {Amplify, Auth} from "aws-amplify";
import {AuthenticatorService} from "@aws-amplify/ui-angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authenticator: AuthenticatorService) {
  }
}
