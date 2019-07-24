import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoFormDialogComponent } from './aluno-form-dialog.component';

describe('AlunoFormDialogComponent', () => {
  let component: AlunoFormDialogComponent;
  let fixture: ComponentFixture<AlunoFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
