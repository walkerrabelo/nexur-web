export interface Exercicio {
  id_exercicio: string;
  descricao_en?: any;
  descricao_pt: string;
  id_tipo_equipamento: string;
  id_classificacao_exercicio: string;
  num_fotos: string;
  sistema: string;
  altura: string;
  largura: string;
  video: string;
  filetime: string;
  ativo: string;
  tipoEquipamento: TipoEquipamento;
  classificacaoExercicio: ClassificacaoExercicio;
}

interface ClassificacaoExercicio {
  id_classificacao_exercicio: string;
  id_tipo_exercicio: string;
  descricao_en: string;
  descricao_pt: string;
  tipoExercicio: TipoExercicio;
}

interface TipoExercicio {
  id_tipo_exercicio: string;
  descricao_en: string;
  descricao_pt: string;
}

interface TipoEquipamento {
  id_tipo_equipamento: string;
  descricao_en: string;
  descricao_pt: string;
}

export const CLASSIFICACOES_EXERCICIO: ClassificacaoExercicio[] = [
  {
    id_classificacao_exercicio: '',
    id_tipo_exercicio: '',
    descricao_en: '',
    descricao_pt: '',
    tipoExercicio: {
      id_tipo_exercicio: '',
      descricao_en: '',
      descricao_pt: ''
    }
  }
];

export const TIPOS_EXERCICIO: TipoExercicio[] = [
  {
    id_tipo_exercicio: '',
    descricao_en: '',
    descricao_pt: '',
  }
];

export const TIPOS_EQUIPAMENTO: TipoEquipamento[] = [
  {
    id_tipo_equipamento: '',
    descricao_en: '',
    descricao_pt: ''
  }
];
