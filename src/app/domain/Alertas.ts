export interface Alerta {
    alerta_id: number;
    alerta_motivo: string;
    alerta_desc: string;
    alerta_inicio: Date;
    alerta_fin: Date;
    paciente_id: number;
    user_id: number;
    alerta_date: Date;
  }

export interface Alertas {
    err: string;
    mensaje: string;
    alertas: Array<Alerta>;
  }