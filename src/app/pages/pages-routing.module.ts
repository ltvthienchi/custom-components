import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomSliderPageComponent } from './custom-slider';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'slider',
        component: CustomSliderPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
