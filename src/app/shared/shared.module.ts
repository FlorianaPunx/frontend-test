import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';
import {ItemsModule} from './items/items.module';

const MODULES = [
  ButtonsModule,
  ItemsModule
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
