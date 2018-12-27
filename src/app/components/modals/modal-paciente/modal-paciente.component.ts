import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-paciente',
  templateUrl: './modal-paciente.component.html',
  styleUrls: ['./modal-paciente.component.css']
})
export class ModalPacienteComponent {

  formPaciente = new FormGroup({
    paciente_rut : new FormControl(),
    paciente_nombre : new FormControl(),
    paciente_alergias : new FormControl(),
    paciente_diagnostico : new FormControl(),
    paciente_complejidad : new FormControl(),
    paciente_fecha_ingreso : new FormControl(),
    paciente_prevision : new FormControl(),
    paciente_sexo : new FormControl(),
    paciente_fecha_nac : new FormControl(),

    paciente_domicilio : new FormControl(),
    contacto_nombre1 : new FormControl(),
    contacto_tel1 : new FormControl(),
    paciente_mail : new FormControl(),
    paciente_ocupacion : new FormControl(),
    paciente_utm_num : new FormControl(),
    paciente_utm : new FormControl(),
    paciente_utm_fono : new FormControl(),

    medico_nombre : new FormControl(),
    enfermera_nombre : new FormControl(),
    kine_r_nombre : new FormControl(),
    kine_m_nombre : new FormControl(),
    fono_nombre : new FormControl()
  });

  constructor() { }

}
