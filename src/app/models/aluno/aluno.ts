import { Usuario } from '../usuario/usuario';
// tslint:disable: variable-name
export interface Aluno {
    id_aluno: string;
    nome: string;
    email: string;
    data_nascimento: string;
    data_matricula: string;
    sexo: string;
    grupo: string;
    id_professor: string;
    id_usuario: string;
    id_iugu?: any;
    hash: string;
    ativo: string;
    visivel: string;
    usuario: Usuario;
}

