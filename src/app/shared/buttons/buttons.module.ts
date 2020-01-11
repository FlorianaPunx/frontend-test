import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTextComponent } from './button-text/button-text.component';

const COMPONENTS = [
  ButtonTextComponent
];

@NgModule({
    declarations: [
      ...COMPONENTS
    ],
    exports: [
      ...COMPONENTS
    ],
    imports: [
        CommonModule
    ]
})
export class ButtonsModule { }
