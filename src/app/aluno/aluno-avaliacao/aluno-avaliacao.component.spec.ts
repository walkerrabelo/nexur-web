import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoAvaliacaoComponent } from './aluno-avaliacao.component';

describe('AlunoAvaliacaoComponent', () => {
  let component: AlunoAvaliacaoComponent;
  let fixture: ComponentFixture<AlunoAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
