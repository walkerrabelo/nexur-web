import { Usuario } from '../usuario/usuario';
import { AlunoTreino } from './aluno-treino';
// tslint:disable: variable-name
export class Aluno {
    id_aluno: string;
    nome: string;
    email: string;
    data_nascimento: Date;
    data_matricula: Date;
    sexo: string;
    grupo: string;
    id_professor: string;
    id_usuario: string;
    id_iugu?: any;
    hash: string;
    ativo: string;
    visivel: string;
    usuario: Usuario;
    series: AlunoTreino[];
}

