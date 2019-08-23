export class AlunoCalendarioInsert {
    id_aluno: string;
    mesos: MesoCiclo[];
    events: Event[];
}
interface MesoCiclo {
    start: string;
    end: string;
    color: string;
}
interface Event {
    tipo: string;
    id_serie: number;
    data: string;
    ser: string;
    obs: string;
}
