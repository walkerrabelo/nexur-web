import { Exercicio } from './../exercicio/exercicio';
import { TipoRepeticao } from '../exercicio/repeticao';
export class AlunoTreinoExercicio {
  // tslint:disable: variable-name
  id_exercicio_serie: string;
  id_serie: string;
  id_exercicio: string;
  id_tipo_repeticao: string;
  num_repeticao: string;
  carga?: any;
  intervalo: string;
  ordem: string;
  nota?: any;
  ativo: string;
  exercicio: Exercicio;
  tipoRepeticao: TipoRepeticao;
  cor: string;
}
