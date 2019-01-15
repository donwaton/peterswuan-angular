import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-antropometricos',
  templateUrl: './modal-antropometricos.component.html',
  styleUrls: ['./modal-antropometricos.component.css']
})
export class ModalAntropometricosComponent {

  formAntropo = new FormGroup({
    pa_talla : new FormControl(),
    pa_peso: new FormControl(),
    pa_circ_craneo: new FormControl()
  });

}
