import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit {
  formUsuario = new FormGroup({
    user_name: new FormControl(),
    user_names: new FormControl(),
    user_email: new FormControl(),
    tipousuario_id: new FormControl()
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    if (this.data) {
      if (this.data.userId) {
        this.usuarioService.get(this.data.userId)
          .subscribe(resp => {
            this.formUsuario = new FormGroup({
              user_name: new FormControl(resp.usuario[0].user_name),
              user_names: new FormControl(resp.usuario[0].user_names),
              user_email: new FormControl(resp.usuario[0].user_email),
              tipousuario_id: new FormControl(resp.usuario[0].tipousuario_id)
            })
          },
            error => error
          )
      }
    }
  }

}
