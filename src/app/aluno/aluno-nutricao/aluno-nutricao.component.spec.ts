import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoNutricaoComponent } from './aluno-nutricao.component';

describe('AlunoNutricaoComponent', () => {
  let component: AlunoNutricaoComponent;
  let fixture: ComponentFixture<AlunoNutricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoNutricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoNutricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
