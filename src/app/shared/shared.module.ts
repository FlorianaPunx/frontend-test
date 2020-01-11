import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsModule} from './buttons/buttons.module';

const MODULES = [
  ButtonsModule
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
