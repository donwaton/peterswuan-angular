import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InsumosService } from '../../../services/insumos.service';

@Component({
  selector: 'app-modal-invasivos',
  templateUrl: './modal-invasivos.component.html',
  styleUrls: ['./modal-invasivos.component.css']
})
export class ModalInvasivosComponent implements OnInit {

  listaInsumos: any;
  
  formInvasivo = new FormGroup({
    insumo_id: new FormControl()
  });

  constructor(private insumosServices: InsumosService) { }

  ngOnInit() {
    this.insumosServices.getList(6)
      .subscribe(resp=>{
        this.listaInsumos = resp.insumos;
      })
  }

}
