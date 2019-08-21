import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoPeriodizacaoSeriesRepeticoesDialogComponent } from './aluno-periodizacao-series-repeticoes-dialog.component';

describe('AlunoPeriodizacaoSeriesRepeticoesDialogComponent', () => {
  let component: AlunoPeriodizacaoSeriesRepeticoesDialogComponent;
  let fixture: ComponentFixture<AlunoPeriodizacaoSeriesRepeticoesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPeriodizacaoSeriesRepeticoesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoPeriodizacaoSeriesRepeticoesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
