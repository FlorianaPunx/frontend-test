import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-tree-element',
  templateUrl: './tree-element.component.html',
  styleUrls: ['./tree-element.component.scss']
})
export class TreeElementComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public children: Array<Item> = [];
  constructor() { }

  ngOnInit() {
  }

}
