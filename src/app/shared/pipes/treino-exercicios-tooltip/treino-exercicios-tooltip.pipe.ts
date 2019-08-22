import { Pipe, PipeTransform } from '@angular/core';
import { AlunoTreinoExercicio } from '../../../models/aluno/aluno-treino-exercicio';

@Pipe({
  name: 'treinoExerciciosTooltip'
})
export class TreinoExerciciosTooltipPipe implements PipeTransform {
  transform(alunoTreinoExercicios: AlunoTreinoExercicio[], ...args: any[]): any {
    let retorno = '';
    alunoTreinoExercicios.forEach(element => retorno += element.exercicio.descricao_pt + ' / ');
    return retorno.substring(0, retorno.length - 3);
  }
}
