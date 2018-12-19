import { Component, OnInit, ViewChild } from '@angular/core';
import { PacienteService } from './services/paciente.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formPaciente = new FormGroup({
    paciente_nombre : new FormControl(),
    paciente_mail: new FormControl()
  });
  paciente: any;
  listaPacientes: any;
  
  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.pacienteService.getListaPacientes()
      .subscribe(resp => {
        this.listaPacientes = resp.pacientes;
      })
  }

  // getPaciente(id){
  //   this.pacienteService.getPaciente(id)
  //     .subscribe(resp => {
  //       this.paciente = resp.paciente;
  //     })
  // }

  // insertPaciente(){
  //   this.pacienteService.insertPaciente(this.formPaciente.value)
  //     .subscribe(x=>{
  //       this.pacienteService.getListaPacientes()
  //         .subscribe(resp => {
  //           this.listaPacientes = resp.pacientes;
  //         })  
  //     })
  // }

  // updatePaciente(id, data){
  //   console.log(data);
  //   this.pacienteService.updatePaciente(id, this.formPaciente.value)
  //     .subscribe(x=>{
  //       this.pacienteService.getListaPacientes()
  //         .subscribe(resp => {
  //           this.listaPacientes = resp.pacientes;
  //         })  
  //     })
  // }
}
