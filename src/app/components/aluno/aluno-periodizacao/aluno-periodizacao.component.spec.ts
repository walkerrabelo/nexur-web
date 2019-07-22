import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';

describe('AlunoPeriodizacaoComponent', () => {
  let component: AlunoPeriodizacaoComponent;
  let fixture: ComponentFixture<AlunoPeriodizacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoPeriodizacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoPeriodizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
