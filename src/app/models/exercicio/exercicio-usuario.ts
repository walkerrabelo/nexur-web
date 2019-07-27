import { Exercicio } from './exercicio';

export interface ExercicioUsuario {
  id_exercicio_usuario: string;
  id_exercicio: string;
  id_usuario: string;
  ativo: string;
  exercicio: Exercicio;
}
