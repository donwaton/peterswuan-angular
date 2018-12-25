import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-evolucion',
  templateUrl: './modal-evolucion.component.html',
  styleUrls: ['./modal-evolucion.component.css']
})
export class ModalEvolucionComponent implements OnInit {
  
  formEvolucion = new FormGroup({
    ep_evolucion : new FormControl(),
    ep_info_rel_ref: new FormControl(),
    ep_examen_fisico: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
