import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatActionButtonAnimatedComponent } from './float-action-button-animated.component';

describe('FloatActionButtonAnimatedComponent', () => {
  let component: FloatActionButtonAnimatedComponent;
  let fixture: ComponentFixture<FloatActionButtonAnimatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatActionButtonAnimatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatActionButtonAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
