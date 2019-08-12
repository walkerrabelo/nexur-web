import { Pipe, PipeTransform } from '@angular/core';
import { AlunoTreinoExercicio } from '../../../../models/aluno/aluno-treino-exercicio';

@Pipe({
  name: 'alunoTreinoExercicioResumoDados'
})
export class AlunoTreinoExercicioResumoDadosPipe implements PipeTransform {

  transform(alunoTreinoExercicio: AlunoTreinoExercicio, ...args: any[]): string {
    let retorno = '';

    retorno = alunoTreinoExercicio.tipoRepeticao ? alunoTreinoExercicio.tipoRepeticao.descricao : '';

    retorno += alunoTreinoExercicio.num_repeticao && alunoTreinoExercicio.num_repeticao.trim() !== '' ?
    ': ' + alunoTreinoExercicio.num_repeticao : '';

    retorno += alunoTreinoExercicio.carga && alunoTreinoExercicio.carga.trim() !== '' ?
      ' Carga: ' + alunoTreinoExercicio.carga.substring(0, 15) : '';

    retorno += alunoTreinoExercicio.intervalo ?
      ' Intervalo: ' + alunoTreinoExercicio.intervalo + 's' : '';

    return retorno.trim();
  }

}
