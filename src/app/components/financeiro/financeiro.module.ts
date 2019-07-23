import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceiroComponent } from './financeiro.component';

@NgModule({
  declarations: [FinanceiroComponent],
  exports: [FinanceiroComponent],
  imports: [
    CommonModule
  ]
})
export class FinanceiroModule { }
