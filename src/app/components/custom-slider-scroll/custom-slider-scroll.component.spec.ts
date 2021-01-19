import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSliderScrollComponent } from './custom-slider-scroll.component';

describe('CustomSliderScrollComponent', () => {
  let component: CustomSliderScrollComponent;
  let fixture: ComponentFixture<CustomSliderScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSliderScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSliderScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
