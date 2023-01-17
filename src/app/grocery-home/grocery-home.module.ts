import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroceryHomeComponent} from "./grocery-home.component";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {AppService} from "../app.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
      GroceryHomeComponent
  ],
    imports: [
        CommonModule,
        AmplifyAuthenticatorModule,
        FormsModule
    ],
  providers: [
      AppService
  ]
})
export class GroceryHomeModule { }
