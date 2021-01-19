import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSliderModel } from '../../models';

@Component({
  selector: 'app-custom-slider-scroll',
  templateUrl: './custom-slider-scroll.component.html',
  styleUrls: ['./custom-slider-scroll.component.scss']
})
export class CustomSliderScrollComponent implements OnInit {

  @Input() min;
  @Input() max;
  @Input() step;
  @Input() inputModel: DataSliderModel;
  @Input() data: DataSliderModel[];

  @Output() inputModelChange = new EventEmitter<DataSliderModel>();

  public dataSlider: number[] = [];
  public valueSlider: DataSliderModel;
  public valueMatSlider: number;
  public valueTranslateY = 1;

  constructor() { }

  ngOnInit(): void {
    this.min = this.min >= 0 ? this.min : 0;
    this.max = this.max <= this.data.length - 1 ? this.max : this.data.length - 1;
    this.step = this.step > this.max || this.step <= 0 || !this.step ? 1 : this.step;
    this.initDataSlider();
  }

  public onInput($event) {
    this.setValueSlider($event.value);
  }

  public onValueChange($event) {
    const idx = this.dataSlider.indexOf($event);
    this.inputModel = this.data[idx];
    this.inputModelChange.emit(this.inputModel);
  }

  private initDataSlider() {
    for (let i = 0; i < this.data.length; i++) {
      this.dataSlider.push(i);
    }
    const idxSlider = this.data.findIndex(item => item.value === this.inputModel.value);
    if (idxSlider && idxSlider >= this.min) {
      this.valueMatSlider = idxSlider;
    } else {
      this.valueMatSlider = this.min;
      this.onValueChange(this.min);
    }
    this.setValueSlider(this.valueMatSlider);
  }

  private setValueSlider(value) {
    const idx = this.dataSlider.indexOf(value);
    this.valueTranslateY = idx * -40;
    this.valueSlider = this.data[idx];
  }

}
