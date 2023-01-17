import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {GroceryHomeComponent} from "./grocery-home/grocery-home.component";
import {GroceryListComponent} from "./grocery-list/grocery-list.component";

const routes: Routes = [
  { path: '', component: GroceryHomeComponent },
  { path: 'list/:id', component: GroceryListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
