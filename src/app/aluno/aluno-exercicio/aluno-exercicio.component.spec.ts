import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoExercicioComponent } from './aluno-exercicio.component';

describe('AlunoExercicioComponent', () => {
  let component: AlunoExercicioComponent;
  let fixture: ComponentFixture<AlunoExercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoExercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
