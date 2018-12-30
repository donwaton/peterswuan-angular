import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent  {
  formUsuario = new FormGroup({
    user_name : new FormControl(),
    user_names: new FormControl(),
    user_email: new FormControl(),
    tipousuario_id: new FormControl()
  });

}
