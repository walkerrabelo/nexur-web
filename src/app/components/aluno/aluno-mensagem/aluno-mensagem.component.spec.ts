import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMensagemComponent } from './aluno-mensagem.component';

describe('AlunoMensagemComponent', () => {
  let component: AlunoMensagemComponent;
  let fixture: ComponentFixture<AlunoMensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoMensagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
