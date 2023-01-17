import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataStore} from "@aws-amplify/datastore";
import { Storage } from "@aws-amplify/storage"
import {Item, List} from "../../models";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent {
  constructor(public route: ActivatedRoute) {}

  newItem: string;
  list: List = null;
  items: Item[] = [];

  async ngOnInit() {
    const listId = this.route.snapshot.paramMap.get('id');
    await this.queryList(listId);
  }

  async queryList(id: string) {
    this.list = await DataStore.query(List, id);
    this.items = await DataStore.query(Item, (i) => i.listID.eq(id));
  }

  async createItem() {
    const item = await DataStore.save(new Item({name: this.newItem, listID: this.list.id}));
    this.items.push(item);
    this.newItem = '';
  }

  async deleteItem(item: Item) {
    await DataStore.delete(item);
    this.items = this.items.filter(l => l.id !== item.id);
  }

  async onUpload(itemID: string, e) {
    const file = e.target.files[0];
    try {
      const s3File = await Storage.put(file.name.replace(' ', '_'), file, {
        level: 'private',
        contentType: "image/png", // contentType is optional
      });
      const item = this.items.find(i => i.id === itemID);
      const newsItem = await DataStore.save(Item.copyOf(item, updated => {
        updated.pictureKey = s3File.key;
      }));
      // update item
      this.items = this.items.map(item => {
        if (item.id === newsItem.id) {
          return newsItem;
        }
        return item;
      })
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
}
