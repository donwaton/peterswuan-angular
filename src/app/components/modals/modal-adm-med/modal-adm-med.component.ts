import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MedicamentosService } from '../../../services/medicamentos.service';

@Component({
  selector: 'app-modal-adm-med',
  templateUrl: './modal-adm-med.component.html',
  styleUrls: ['./modal-adm-med.component.css']
})
export class ModalAdmMedComponent implements OnInit {
  listaMedicamentos: any;
  
  formAdmMed = new FormGroup({
    insumo_id: new FormControl(),
    pi_via_adm: new FormControl(),
    pi_posologia: new FormControl(),
    hi_hora: new FormControl()
  });

  constructor(private medicamentosService: MedicamentosService) { }

  ngOnInit() {
    this.medicamentosService.getList()
      .subscribe(resp=>{
        this.listaMedicamentos = resp.medicamentos;
      })
  }

}
