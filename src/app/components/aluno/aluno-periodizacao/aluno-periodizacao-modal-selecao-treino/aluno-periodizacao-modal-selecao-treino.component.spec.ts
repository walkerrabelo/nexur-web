import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoPeriodizacaoModalSelecaoTreinoComponent } from './aluno-periodizacao-modal-selecao-treino.component';

describe('AlunoPeriodizacaoModalSelecaoTreinoComponent', () => {
  let component: AlunoPeriodizacaoModalSelecaoTreinoComponent;
  let fixture: ComponentFixture<AlunoPeriodizacaoModalSelecaoTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPeriodizacaoModalSelecaoTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoPeriodizacaoModalSelecaoTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
