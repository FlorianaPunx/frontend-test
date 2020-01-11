import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss']
})
export class ButtonTextComponent implements OnInit {

  @Input() public disabled = false;
  @Input() type = 'button';

  @ViewChild('buttonElement', {static: true}) public buttonElement: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  public onClick(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
  }

}
