import { TestBed } from '@angular/core/testing';

import { AlunoTreinoService } from './aluno-treino.service';

describe('AlunoTreinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoTreinoService = TestBed.get(AlunoTreinoService);
    expect(service).toBeTruthy();
  });
});
