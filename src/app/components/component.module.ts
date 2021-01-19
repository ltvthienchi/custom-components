import { NgModule } from '@angular/core';
import { CustomSliderScrollComponent } from './custom-slider-scroll';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  CustomSliderScrollComponent
];

const MAT_MODULES = [
  MatSliderModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    ...MAT_MODULES,
    CommonModule,
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentModule { }
