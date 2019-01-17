import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PacienteService } from '../../../services/paciente.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export interface DatosPaciente {
  contacto_nombre1: string;
  contacto_nombre2: string;
  contacto_tel1: string;
  contacto_tel2: string;
  enfermera_nombre: string;
  fono_nombre: string;
  kine_m_nombre: string;
  kine_r_nombre: string;
  medico_nombre: string;
  paciente_alergias: string;
  paciente_complejidad: string;
  paciente_diagnostico: string;
  paciente_dom_map: string;
  paciente_domicilio: string;
  paciente_fecha_ingreso: Date;
  paciente_fecha_nac: Date;
  paciente_grupo_sang: string;
  paciente_id: number;
  paciente_mail: string;
  paciente_nombre: string;
  paciente_ocupacion: string;
  paciente_prevision: string;
  paciente_rut: string;
  paciente_sexo: string;
  paciente_utm: string;
  paciente_utm_fono: string;
  paciente_utm_num: string;
  paciente_url: string;
}

@Component({
  selector: 'app-modal-paciente',
  templateUrl: './modal-paciente.component.html',
  styleUrls: ['./modal-paciente.component.css']
})
export class ModalPacienteComponent implements OnInit {
  paciente: DatosPaciente;

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  formPaciente = new FormGroup({
    paciente_rut: new FormControl(),
    paciente_nombre: new FormControl(),
    paciente_alergias: new FormControl(),
    paciente_diagnostico: new FormControl(),
    paciente_complejidad: new FormControl(),
    paciente_fecha_ingreso: new FormControl(),
    paciente_prevision: new FormControl(),
    paciente_sexo: new FormControl(),
    paciente_grupo_sang: new FormControl(),
    paciente_fecha_nac: new FormControl(),

    paciente_domicilio: new FormControl(),
    contacto_nombre1: new FormControl(),
    contacto_tel1: new FormControl(),
    paciente_mail: new FormControl(),
    paciente_ocupacion: new FormControl(),
    paciente_utm_num: new FormControl(),
    paciente_utm: new FormControl(),
    paciente_utm_fono: new FormControl(),

    medico_nombre: new FormControl(),
    enfermera_nombre: new FormControl(),
    kine_r_nombre: new FormControl(),
    kine_m_nombre: new FormControl(),
    fono_nombre: new FormControl(),
    paciente_url: new FormControl()
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pacienteService: PacienteService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    if (this.data) {
      if (this.data.pacienteId) {
        this.pacienteService.getPaciente(this.data.pacienteId)
          .subscribe(resp => {
            this.paciente = resp.paciente[0];
            this.formPaciente = new FormGroup({
              paciente_rut: new FormControl(this.paciente.paciente_rut),
              paciente_nombre: new FormControl(this.paciente.paciente_nombre),
              paciente_alergias: new FormControl(this.paciente.paciente_alergias),
              paciente_diagnostico: new FormControl(this.paciente.paciente_diagnostico),
              paciente_complejidad: new FormControl(this.paciente.paciente_complejidad),
              paciente_fecha_ingreso: new FormControl(this.paciente.paciente_fecha_ingreso),
              paciente_prevision: new FormControl(this.paciente.paciente_prevision),
              paciente_sexo: new FormControl(this.paciente.paciente_sexo),
              paciente_grupo_sang: new FormControl(this.paciente.paciente_grupo_sang),
              paciente_fecha_nac: new FormControl(this.paciente.paciente_fecha_nac),

              paciente_domicilio: new FormControl(this.paciente.paciente_domicilio),
              contacto_nombre1: new FormControl(this.paciente.contacto_nombre1),
              contacto_tel1: new FormControl(this.paciente.contacto_tel1),
              paciente_mail: new FormControl(this.paciente.paciente_mail),
              paciente_ocupacion: new FormControl(this.paciente.paciente_ocupacion),
              paciente_utm_num: new FormControl(this.paciente.paciente_utm_num),
              paciente_utm: new FormControl(this.paciente.paciente_utm),
              paciente_utm_fono: new FormControl(this.paciente.paciente_utm_fono),

              medico_nombre: new FormControl(this.paciente.medico_nombre),
              enfermera_nombre: new FormControl(this.paciente.enfermera_nombre),
              kine_r_nombre: new FormControl(this.paciente.kine_r_nombre),
              kine_m_nombre: new FormControl(this.paciente.kine_m_nombre),
              fono_nombre: new FormControl(this.paciente.fono_nombre),
              paciente_url: new FormControl(this.paciente.paciente_url)

            })
          },
            error => error
          )
      }
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'uploads/paciente_' + this.data.pacienteId;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.getUrl();
      }
      )
    )
      .subscribe()

  }

  getUrl() {
    let ref = this.storage.ref('uploads/paciente_' + this.data.pacienteId);
    ref.getDownloadURL()
      .subscribe(resp => {
        this.formPaciente.patchValue({ paciente_url: resp })
      })

  }

}
