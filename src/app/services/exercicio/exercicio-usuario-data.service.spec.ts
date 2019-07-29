import { TestBed } from '@angular/core/testing';

import { ExercicioUsuarioDataService } from './exercicio-usuario-data.service';

describe('ExercicioUsuarioDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExercicioUsuarioDataService = TestBed.get(ExercicioUsuarioDataService);
    expect(service).toBeTruthy();
  });
});
