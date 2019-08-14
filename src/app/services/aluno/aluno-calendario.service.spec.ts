import { TestBed } from '@angular/core/testing';

import { AlunoCalendarioService } from './aluno-calendario.service';

describe('AlunoCalendarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoCalendarioService = TestBed.get(AlunoCalendarioService);
    expect(service).toBeTruthy();
  });
});
