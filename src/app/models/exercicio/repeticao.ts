export interface TipoRepeticao {
    // Transformado em string para poder virar um campo livre
    id_tipo_repeticao: string;
    descricao: string;
}
export const TIPOS_REPETICOES =
    [
        'Drop-set', 'Bi-set', 'Tri-set', 'Super-set', 'Pirâm. Cresc.',
        'Pirâm. Decresc.', 'Onda Cresc.', 'Onda Decresc.', 'Circuito',
        'Rotina Alta/Baixa', 'Rest-pause', 'Corrida intervalada', 'HIIT'
    ];
