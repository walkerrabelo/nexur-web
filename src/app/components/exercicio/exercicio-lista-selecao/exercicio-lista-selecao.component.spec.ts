import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioListaSelecaoComponent } from './exercicio-lista-selecao.component';

describe('ExercicioListaSelecaoComponent', () => {
  let component: ExercicioListaSelecaoComponent;
  let fixture: ComponentFixture<ExercicioListaSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioListaSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioListaSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
