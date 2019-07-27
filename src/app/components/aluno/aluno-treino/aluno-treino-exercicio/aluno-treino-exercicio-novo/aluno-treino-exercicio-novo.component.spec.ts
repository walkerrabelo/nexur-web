import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoExercicioNovoComponent } from './aluno-treino-exercicio-novo.component';

describe('AlunoTreinoExercicioNovoComponent', () => {
  let component: AlunoTreinoExercicioNovoComponent;
  let fixture: ComponentFixture<AlunoTreinoExercicioNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoExercicioNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoExercicioNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
