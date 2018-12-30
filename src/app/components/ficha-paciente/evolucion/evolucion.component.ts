import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalEvolucionComponent } from '../../modals/modal-evolucion/modal-evolucion.component';
import { EvolucionService } from '../../../services/evolucion.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-evolucion',
  templateUrl: './evolucion.component.html',
  styleUrls: ['./evolucion.component.css']
})
export class EvolucionComponent implements OnInit {
  listaEvolucion: any;
  pacienteId: string;

  constructor(private dialog: MatDialog, 
    private route: ActivatedRoute, 
    private evolucionService: EvolucionService,
    private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.pacienteId = params.get('id');
      this.getLE(params.get('id'));
    });
  }

  newEvolucion(){
    this.dialog.open(ModalEvolucionComponent, {
      width: '800px'
    })
    .afterClosed()
    .subscribe(resp => {
      if(resp) {
        resp['paciente_id'] = parseInt(this.pacienteId);
        resp['user_id'] = parseInt(localStorage.getItem('user_id'));
        this.insertEv(resp);
      }
    });
  }

  getLE(id){
    this.evolucionService.getListaEvolucion(id)
      .subscribe(resp => {
        this.listaEvolucion = resp.lista_evolucion;
      },
      error => error
    )
  }

  insertEv(data){
    this.evolucionService.insertEvolucion(data)
      .subscribe(resp => {
        this.snackBar.open('Evolución del paciente ingresada correctamente!',"Ok",{duration: 2000});
        this.getLE(this.pacienteId);
      },
      error => error
    )
  }

}
