import {Component, ContentChild, forwardRef, HostBinding, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CobiroInputRefDirective} from './cobiro-input-ref.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef( () => InputComponent), multi: true}
  ]
})
export class InputComponent {

  @ContentChild(CobiroInputRefDirective)
  input: CobiroInputRefDirective;
  @Input() icon: string;
  inputFocus = false;

  @HostBinding('class.focus')
  get focus() {
    return this.inputFocus;
  }

}
