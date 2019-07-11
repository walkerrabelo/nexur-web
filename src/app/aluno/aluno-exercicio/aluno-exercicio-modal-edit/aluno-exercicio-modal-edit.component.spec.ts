import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoExercicioModalEditComponent } from './aluno-exercicio-modal-edit.component';

describe('AlunoExerciciosModalEditComponent', () => {
  let component: AlunoExercicioModalEditComponent;
  let fixture: ComponentFixture<AlunoExercicioModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoExercicioModalEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoExercicioModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
