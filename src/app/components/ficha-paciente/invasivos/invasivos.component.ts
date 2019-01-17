import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalInvasivosComponent } from '../../modals/modal-invasivos/modal-invasivos.component';
import { InsumosService } from '../../../services/insumos.service';
import { PacienteInsumoService } from '../../../services/paciente-insumo.service';
import { InvasivoService } from '../../../services/invasivo.service';
import { ModalCambioInvasivoComponent } from '../../modals/modal-cambio-invasivo/modal-cambio-invasivo.component';

@Component({
  selector: 'app-invasivos',
  templateUrl: './invasivos.component.html',
  styleUrls: ['./invasivos.component.css']
})
export class InvasivosComponent implements OnInit {
  pacienteId: string;
  listaInvasivos: any;
  loading: boolean = true;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private insumosService: InsumosService,
    private pacienteInsumosService: PacienteInsumoService,
    private invasivosService: InvasivoService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.pacienteId = params.get('id');
        this.getInvasivos(this.pacienteId);
        this.loading = false;
      });
  }

  getInvasivos(id) {
    this.invasivosService.getList(id)
      .subscribe(resp => {
        this.listaInvasivos = resp.invasivos;
      }, error => error)
  }

  newInvasivo() {
    this.dialog.open(ModalInvasivosComponent, {
      width: '800px'
    })
      .afterClosed()
      .subscribe(resp => {
        if (resp) {
          if (resp) {
            resp['paciente_id'] = parseInt(this.pacienteId);
            this.insertInsumo(resp);
          }
        }
      });
  }

  insertInsumo(data) {
    this.pacienteInsumosService.put(data)
      .subscribe(resp => {
        this.snackBar.open('Invasivo ingresado correctamente!', "Ok", { duration: 2000 });
        this.getInvasivos(this.pacienteId);
      },
        error => error
      )
  }

  cambioInvasivo(pi_id, id) {
    this.dialog.open(ModalCambioInvasivoComponent, {
      width: '800px'
    })
      .afterClosed()
      .subscribe(resp => {
        if (resp) {
          if(id){
            resp['invasivo_id'] = parseInt(id);
          }
          resp['pi_id'] = parseInt(pi_id);
          resp['user_id'] = parseInt(localStorage.getItem('user_id'));
          this.insertInvasivo(resp);
        }
      });
  }

  insertInvasivo(data) {
    this.invasivosService.put(data)
      .subscribe(resp=>{
        this.snackBar.open('Cambio de invasivo ingresado correctamente!', "Ok", { duration: 2000 });
        this.getInvasivos(this.pacienteId);
      }, error => error
      )
  }

}
