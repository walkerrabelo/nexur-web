import { AlunoTreinoExercicio } from './aluno-treino-exercicio';
export interface AlunoTreino {
  id_serie: string;
  id_aluno: string;
  descricao: string;
  data: string;
  data_ativacao: string;
  data_vencimento: string;
  ativo: string;
  visivel: string;
  exercicioSeries: AlunoTreinoExercicio;
}
