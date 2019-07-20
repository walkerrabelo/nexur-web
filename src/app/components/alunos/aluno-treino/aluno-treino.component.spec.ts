import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoComponent } from './aluno-treino.component';

describe('AlunoTreinoComponent', () => {
  let component: AlunoTreinoComponent;
  let fixture: ComponentFixture<AlunoTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
