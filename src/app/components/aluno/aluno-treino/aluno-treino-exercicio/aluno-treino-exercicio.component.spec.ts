import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoExercicioComponent } from './aluno-treino-exercicio.component';

describe('AlunoTreinoExercicioComponent', () => {
  let component: AlunoTreinoExercicioComponent;
  let fixture: ComponentFixture<AlunoTreinoExercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoExercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
