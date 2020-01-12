import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Item} from '../models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Item[];
  public itemsById = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getItems()
      .subscribe((result) => {
        this.items = result;
        this.itemsById = this.sort(this.items);
        console.log(this.itemsById);
      });
  }

  public sort(items: Array<Item>, id = null, parent = 'parent_id'): Array<Item> {
    return items
      .filter(item => item[parent] === id)
      .map(item => ({...item, children: this.sort(items, item.id)}));
  }

}
