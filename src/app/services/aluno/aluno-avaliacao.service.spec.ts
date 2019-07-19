import { TestBed } from '@angular/core/testing';

import { AlunoAvaliacaoService } from './aluno-avaliacao.service';

describe('AlunoAvaliacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoAvaliacaoService = TestBed.get(AlunoAvaliacaoService);
    expect(service).toBeTruthy();
  });
});
