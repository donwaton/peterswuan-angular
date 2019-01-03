import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { AntropometricosService } from '../../../services/antropometricos.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  paciente: any;
  antropometricos: any;

  constructor(
    private route: ActivatedRoute,
    private pacienteService: PacienteService, 
    private antropometricosService: AntropometricosService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.getPaciente(params.get('id'));
    });
  }

  getPaciente(id){
    this.pacienteService.getPaciente(id)
      .subscribe(resp => {
        this.paciente = resp.paciente;
      });
    this.antropometricosService.get(id)
      .subscribe(resp => {
        this.antropometricos = resp.antropometricos;
      });
  }
}
