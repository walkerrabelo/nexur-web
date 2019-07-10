import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoExerciciosModalEditComponent } from './aluno-exercicios-modal-edit.component';

describe('AlunoExerciciosModalEditComponent', () => {
  let component: AlunoExerciciosModalEditComponent;
  let fixture: ComponentFixture<AlunoExerciciosModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoExerciciosModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoExerciciosModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
