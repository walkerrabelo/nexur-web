import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioUsuarioComponent } from './exercicio-usuario.component';

describe('ExercicioUsuarioComponent', () => {
  let component: ExercicioUsuarioComponent;
  let fixture: ComponentFixture<ExercicioUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercicioUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
