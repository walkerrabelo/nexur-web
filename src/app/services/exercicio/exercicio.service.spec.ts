import { TestBed } from '@angular/core/testing';

import { ExercicioService } from './exercicio.service';

describe('ExercicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercicioService = TestBed.get(ExercicioService);
    expect(service).toBeTruthy();
  });
});
