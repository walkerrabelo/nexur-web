import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoTreinoEditComponent } from './aluno-treino-edit.component';

describe('AlunoTreinoEditComponent', () => {
  let component: AlunoTreinoEditComponent;
  let fixture: ComponentFixture<AlunoTreinoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoTreinoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoTreinoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
