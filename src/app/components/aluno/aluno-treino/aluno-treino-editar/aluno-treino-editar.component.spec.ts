import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoEditarComponent } from './aluno-treino-editar.component';

describe('AlunoTreinoEditarComponent', () => {
  let component: AlunoTreinoEditarComponent;
  let fixture: ComponentFixture<AlunoTreinoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
