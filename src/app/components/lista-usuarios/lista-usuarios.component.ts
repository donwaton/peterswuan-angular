import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuarios, datosUsuario } from '../../domain/Usuarios';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  loading = true;
  listaUsuarios : Array<datosUsuario>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getListaUsuarios()
      .subscribe(resp=>{
        this.listaUsuarios = resp.usuarios;
        this.loading = false;
      })
  }

}
