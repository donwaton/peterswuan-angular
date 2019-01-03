import { Time } from "@angular/common";

export interface DatosAdmMed {
  pi_id: number;
  insumo_id: number;
  insumo_nombre: string;
  pi_via_adm: string;
  pi_posologia: string;
  hi_hora: Time;
}
  
export interface AdmMed {
  err: string;
  mensaje: string;
  adm_medicamentos: Array<DatosAdmMed>;
}

export interface Medicamento {
  insumo_id: number;
  tipoinsumo_id: number;
  insumo_nombre: string;
  insumo_stock: number;
  insumo_precio: number;
}

export interface Medicamentos {
  err: string;
  mensaje: string;
  medicamentos: Array<Medicamento>;
}
