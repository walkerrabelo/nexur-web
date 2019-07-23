import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';

@NgModule({
  declarations: [AvaliacaoComponent],
  exports: [AvaliacaoComponent],
  imports: [
    CommonModule
  ]
})
export class AvaliacaoModule { }
