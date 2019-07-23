import { Pipe, PipeTransform } from '@angular/core';


const ROUTES_NEXUR = new Map([
  ['/home', '/ Home'],
  ['/alunos', '/ Lista de Alunos'],
  ['/aluno', '/ Aluno'],
  ['/aulas', '/ Calendário de Aulas'],
  ['/financeiro', '/ Financeiro'],
  ['/exercicios', '/ Exercícios'],
  ['/avaliacoes', '/ Modelos de Avaliacoes'],
  ['/preferencias', '/ Preferências']
]);

@Pipe({
  name: 'routeFriendly'
})
export class RouteFriendlyPipe implements PipeTransform {

  transform(route: string, ...args: any[]): any {
    return ROUTES_NEXUR.get(route);
  }

}
