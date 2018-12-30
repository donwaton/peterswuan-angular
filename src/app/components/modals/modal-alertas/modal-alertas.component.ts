import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-alertas',
  templateUrl: './modal-alertas.component.html',
  styleUrls: ['./modal-alertas.component.css']
})
export class ModalAlertasComponent {
  formAlerta = new FormGroup({
    alerta_motivo : new FormControl(),
    alerta_desc: new FormControl(),
    alerta_inicio: new FormControl(),
    alerta_fin: new FormControl()
  });
}
