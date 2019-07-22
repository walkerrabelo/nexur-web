import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDragDropItemComponent } from './exercicio-drag-drop-item.component';

describe('ExercicioDragDropItemComponent', () => {
  let component: ExercicioDragDropItemComponent;
  let fixture: ComponentFixture<ExercicioDragDropItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioDragDropItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDragDropItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
