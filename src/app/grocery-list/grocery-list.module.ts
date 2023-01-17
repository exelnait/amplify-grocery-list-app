import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroceryListComponent} from "./grocery-list.component";
import {AmplifyS3ImageComponent} from "../amplify-s3-image/amplify-s3-image.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
      GroceryListComponent,
    AmplifyS3ImageComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class GroceryListModule { }
