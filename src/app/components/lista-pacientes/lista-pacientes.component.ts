import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  loading = true;
  listaPacientes: Array<any>;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.getListaPacientes()
      .subscribe(resp=>{
        this.listaPacientes = resp.pacientes;
        this.loading = false;
      });
  }

}
