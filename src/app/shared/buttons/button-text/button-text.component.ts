import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-button-text',
  templateUrl: './button-text.component.html',
  styleUrls: ['./button-text.component.scss']
})
export class ButtonTextComponent {
  @Output() public click: EventEmitter<null> = new EventEmitter<null>();
  @Input() public disabled = false;
  @Input() public type = 'button';
  @Input() public color: 'primary' | 'secondary' | 'transparent' = 'primary';
  @Input() public routerLink: string;
  @Input() public disableHoverEffect = false;
  @Input() public active = false;
  @Input() public tabIndex: number;
  @ViewChild('buttonElement', {static: true}) public buttonElement: ElementRef;
  public buttonFocus$: Observable<boolean>;
  private buttonFocusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.buttonFocus$ = this.buttonFocusSubject.asObservable();
  }

  public onClick(event?: MouseEvent | any): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.blurButton();

    if (this.disabled) {
      return;
    }

    this.click.emit(null);
  }

  public onFocus() {
    this.buttonFocusSubject.next(true);
  }

  public onBlur() {
    this.buttonFocusSubject.next(false);
  }

  public blurButton() {
    this.buttonElement.nativeElement.blur();
  }
}
