import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio-dialog-form.component';

describe('AlunoTreinoExercicioDialogFormComponent', () => {
  let component: AlunoTreinoExercicioDialogFormComponent;
  let fixture: ComponentFixture<AlunoTreinoExercicioDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoExercicioDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoExercicioDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
