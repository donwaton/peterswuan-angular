import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuarios, datosUsuario } from '../../domain/Usuarios';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalUsuarioComponent } from '../modals/modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  loading = true;
  listaUsuarios : Array<datosUsuario>;

  constructor(
    private dialog: MatDialog, 
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.getListaUsuario()
  }

  openDialog(){
    this.dialog.open(ModalUsuarioComponent, {
      width: '400px'
      })
      .afterClosed()
      .subscribe(resp => {
        if(resp) {
          this.insertUsuario(resp)
        }
      })
  }

  insertUsuario(data){
    this.usuarioService.insert(data)
      .subscribe(resp =>{
        this.snackBar.open('Se ha creado el usuario exitósamente',"Ok",{duration: 2000});
        this.getListaUsuario();
      },
        error => error
      )
  }

  getListaUsuario(){
    this.usuarioService.getList()
      .subscribe(resp=>{
        this.listaUsuarios = resp.usuarios;
        this.loading = false;
      })
  }

}
