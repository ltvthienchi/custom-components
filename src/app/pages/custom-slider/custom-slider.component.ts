import { Component, OnInit } from '@angular/core';
import { DataSliderModel } from '../../models';

@Component({
  selector: 'app-custom-slider',
  templateUrl: './custom-slider.component.html',
  styleUrls: ['./custom-slider.component.scss']
})
export class CustomSliderPageComponent implements OnInit {

  public valueSliderScroll: DataSliderModel;
  public valueSliderScrollDemoTwo: DataSliderModel;
  public dataSliderScroll: DataSliderModel[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i <= 50; i++) {
      const item: DataSliderModel = {
        value: i * 100,
        text: i < 10 ? i * 100 : (i * 100) / 1000,
        unit: i < 10 ? 'gram' : 'kilogram'
      };
      this.dataSliderScroll.push(item);
    }
    this.valueSliderScroll = this.dataSliderScroll[0];
    this.valueSliderScrollDemoTwo = this.dataSliderScroll[0];
  }

}
