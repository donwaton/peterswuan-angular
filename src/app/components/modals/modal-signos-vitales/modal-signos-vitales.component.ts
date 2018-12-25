import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal-signos-vitales',
  templateUrl: './modal-signos-vitales.component.html',
  styleUrls: ['./modal-signos-vitales.component.css']
})
export class ModalSignosVitalesComponent {
  formSignosVitales = new FormGroup({
    sv_fc : new FormControl(),
    sv_fr: new FormControl(),
    sv_so: new FormControl(),
    sv_temp: new FormControl()
  });
}
