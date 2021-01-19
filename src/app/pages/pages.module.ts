import { NgModule } from '@angular/core';
import { CustomSliderPageComponent } from './custom-slider';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentModule } from '../components/component.module';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  CustomSliderPageComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentModule,
  ]
})
export class PagesModule { }
