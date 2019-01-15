import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { AntropometricosService } from '../../../services/antropometricos.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalAntropometricosComponent } from '../../modals/modal-antropometricos/modal-antropometricos.component';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  pacienteId: string;
  paciente: any;
  antropometricos: any;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private antropometricosService: AntropometricosService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.pacienteId = params.get('id');
        this.getPaciente(this.pacienteId);
        this.getAntropo(this.pacienteId);
      });
  }

  getPaciente(id) {
    this.pacienteService.getPaciente(id)
      .subscribe(resp => {
        this.paciente = resp.paciente[0];
      });
  }

  getAntropo(id) {
    this.antropometricosService.get(id)
      .subscribe(resp => {
        this.antropometricos = resp.antropometricos;
      });
  }

  registrarAntropo() {
    this.dialog.open(ModalAntropometricosComponent)
      .afterClosed()
      .subscribe(resp => {
        if (resp) {
          resp['paciente_id'] = parseInt(this.pacienteId);
          resp['user_id'] = parseInt(localStorage.getItem('user_id'));
          console.log(resp);
          this.insertarAntropo(resp);
        }
      });
  }

  insertarAntropo(data) {
    this.antropometricosService.put(data)
      .subscribe(resp => {
        this.snackBar.open('Antropometricos actualizados', "Ok", { duration: 2000 });
        this.getAntropo(this.pacienteId);
      },
        error => error
      )
  }

}
