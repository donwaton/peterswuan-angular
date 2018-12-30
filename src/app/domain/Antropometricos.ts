export interface Antropometrico {
    pa_id: number;
    paciente_id: number;
    pa_peso: number;
    pa_talla: number;
    pa_circ_craneo: number;
    pa_date: Date;
    user_id: number;
  }

export interface Antropometricos {
    err: string;
    mensaje: string;
    antropometricos: Array<Antropometrico>;
  }