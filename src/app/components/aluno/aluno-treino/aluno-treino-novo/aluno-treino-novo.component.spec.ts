import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoNovoComponent } from './aluno-treino-novo.component';

describe('AlunoTreinoNovoComponent', () => {
  let component: AlunoTreinoNovoComponent;
  let fixture: ComponentFixture<AlunoTreinoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
