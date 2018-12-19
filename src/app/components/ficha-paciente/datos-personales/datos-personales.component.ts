import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  paciente: any;

  constructor(private route: ActivatedRoute,private pacienteService: PacienteService) { }

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
      })
  }

}
