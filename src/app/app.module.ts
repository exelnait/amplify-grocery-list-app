import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {GroceryHomeModule} from "./grocery-home/grocery-home.module";
import {GroceryListModule} from "./grocery-list/grocery-list.module";
import {AppService} from "./app.service";
import { AppBarComponent } from './app-bar/app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAuthenticatorModule,
    AppRoutingModule,
    GroceryHomeModule,
    GroceryListModule
  ],
  providers: [
      AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
