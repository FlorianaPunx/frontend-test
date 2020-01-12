import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';
import {ItemsModule} from './items/items.module';
import {FormsModule} from './forms/forms.module';

const MODULES = [
  ButtonsModule,
  ItemsModule,
  FormsModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule {}
