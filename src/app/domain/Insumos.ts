export interface Insumo {
    insumo_id: number;
    tipoinsumo_id: number;
    insumo_nombre: string;
    insumo_stock: number;
    insumo_precio: number;
}
  
export interface Insumos {
  err: string;
  mensaje: string;
  insumos: Array<Insumo>;
}

export interface PacienteInsumo {
  pi_id: number;
  paciente_id: number;
  insumo_id: number;
  pi_consumo: number;
  pi_stock: number;
  pi_via_adm: string;
  pi_posologia: string;
  tipoinsumo_id: number;
  insumo_nombre: string;
  insumo_stock: number;
  insumo_precio: number;
  tipoinsumo_nombre: string;
}

export interface PacienteInsumos {
  err: string;
  mensaje: string;
  listainsumos: Array<PacienteInsumo>;
}

export interface Invasivo {
  invasivo_id: number;
  pi_id: number;
  fecha_vencimiento: Date;
  fecha_cambio: Date;
  user_id: number;
  paciente_id: number;
  insumo_id: number;
  pi_consumo: number;
  pi_stock: number;
  pi_via_adm: string;
  pi_posologia: string;
  tipoinsumo_id: number;
  insumo_nombre: string;
  insumo_stock: number;
  insumo_precio: number;
}

export interface Invasivos {
  err: string;
  mensaje: string;
  invasivos: Array<Invasivo>;
}

