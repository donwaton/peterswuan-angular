import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
