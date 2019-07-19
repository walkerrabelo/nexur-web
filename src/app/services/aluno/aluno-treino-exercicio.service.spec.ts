import { TestBed } from '@angular/core/testing';

import { AlunoTreinoExercicioService } from './aluno-treino-exercicio.service';

describe('AlunoTreinoExercicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoTreinoExercicioService = TestBed.get(AlunoTreinoExercicioService);
    expect(service).toBeTruthy();
  });
});
