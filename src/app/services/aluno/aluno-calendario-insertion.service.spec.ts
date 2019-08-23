import { TestBed } from '@angular/core/testing';

import { AlunoCalendarioInsertionService } from './aluno-calendario-insertion.service';

describe('AlunoCalendarioInsertionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoCalendarioInsertionService = TestBed.get(AlunoCalendarioInsertionService);
    expect(service).toBeTruthy();
  });
});
