import { AlunoTreinoExercicio } from '../../models/aluno/aluno-treino-exercicio';
export function compareAlunoTreinoExercicio(
    alunoTreinoExercicio1: AlunoTreinoExercicio,
    alunoTreinoExercicio2: AlunoTreinoExercicio): boolean {

    let isEqual = false;

    if (alunoTreinoExercicio1.id_exercicio === alunoTreinoExercicio2.id_exercicio
        && alunoTreinoExercicio1.id_tipo_repeticao === alunoTreinoExercicio2.id_tipo_repeticao
        && alunoTreinoExercicio1.num_repeticao === alunoTreinoExercicio2.num_repeticao
        && alunoTreinoExercicio1.carga === alunoTreinoExercicio2.carga
        && alunoTreinoExercicio1.intervalo === alunoTreinoExercicio2.intervalo
        && alunoTreinoExercicio1.nota === alunoTreinoExercicio2.nota) {
            isEqual = true;
    }


    return isEqual;
}

export function modifyListAlunoTreinoExercicio(element, index, array) {
}