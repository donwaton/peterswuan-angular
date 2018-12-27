import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalPacienteComponent } from '../modals/modal-paciente/modal-paciente.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  loading = true;
  listaPacientes: Array<any>;

  constructor(private pacienteService: PacienteService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.obtenerListaPacientes();
  }

  openPaciente(){
    this.dialog.open(ModalPacienteComponent)
    .afterClosed()
    .subscribe(resp=>{
      if(resp){
        this.insertarPaciente(resp);
      }
    })
  }

  insertarPaciente(data){
    this.pacienteService.insertPaciente(data)
      .subscribe(resp => {
        this.snackBar.open('Paciente ingresado correctamente!',"Ok",{duration: 2000});
        this.obtenerListaPacientes();
      },
      error => error
    )
  }

  obtenerListaPacientes(){
    this.pacienteService.getListaPacientes()
    .subscribe(resp=>{
      this.listaPacientes = resp.pacientes;
      this.loading = false;
    });
  }

}
