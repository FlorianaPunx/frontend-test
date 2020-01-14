import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Item} from '../models/item.model';
import {FormControl} from '@angular/forms';
import {combineLatest, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Item[];
  public itemsById: Item[];
  public filter: FormControl;
  public filter$: Observable<string>;
  public filteredInput$: Observable<Item[]>;

  constructor(private homeService: HomeService) {
    this.filter = new FormControl('');
    this.filter$ = this.filter.valueChanges.pipe(
      map(value => value.toLowerCase())
    );
  }

  ngOnInit() {
    this.homeService.getItems()
      .subscribe((result) => {
        this.items = result;
        this.itemsById = this.sort(this.items);

        this.filteredInput$ = combineLatest(this.items, this.filter$).pipe(
          startWith(''),
          map(([items, filterString]) => {
            return (filterString) ?
              this.items.filter((item: Item) => item.title.toLowerCase().indexOf(filterString.toString()) !== -1) :
              this.itemsById;
          })
        );
      });
  }

  private sort(items: Array<Item>, id = null, parent = 'parent_id'): Array<Item> {
    return items
      .filter(item => item[parent] === id)
      .map(item => ({...item, children: this.sort(items, item.id)}));
  }

}
