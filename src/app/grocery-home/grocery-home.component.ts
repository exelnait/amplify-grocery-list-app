import { Component } from '@angular/core';

import {List, User} from "../../models";
import {DataStore} from "@aws-amplify/datastore";
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-grocery-home',
  templateUrl: './grocery-home.component.html',
  styleUrls: ['./grocery-home.component.scss']
})
export class GroceryHomeComponent {
  constructor(public appService: AppService, public router: Router) {
  }

  user: User;
  lists: List[] = []

  async ngOnInit() {
    this.user = await this.appService.getUser();
    await this.queryLists()
  }

  async queryLists() {
    this.lists = await DataStore.query(List, (l) => l.listUserId.eq(this.user.id));
  }

  async createList() {
    const list = await DataStore.save(new List({name: 'New List', User: this.user}));
    this.lists.push(list);
  }

  async deleteList(list: List) {
    await DataStore.delete(list);
    this.lists = this.lists.filter(l => l.id !== list.id);
  }

  openList(id: string) {
    this.router.navigate(['/list', id]);
  }
}
