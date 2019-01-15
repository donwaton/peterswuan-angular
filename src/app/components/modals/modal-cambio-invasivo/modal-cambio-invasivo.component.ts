import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-cambio-invasivo',
  templateUrl: './modal-cambio-invasivo.component.html',
  styleUrls: ['./modal-cambio-invasivo.component.css']
})
export class ModalCambioInvasivoComponent implements OnInit {

  listaInsumos: any;
  
  formInvasivo = new FormGroup({
    usuario_resp: new FormControl(),
    fecha_vencimiento: new FormControl()

  });

  constructor() { }

  ngOnInit() {
  }

}
