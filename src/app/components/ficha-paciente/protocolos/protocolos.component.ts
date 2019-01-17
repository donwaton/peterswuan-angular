import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalProtocolosComponent } from '../../modals/modal-protocolos/modal-protocolos.component';
import { ProtocolosService } from '../../../services/protocolos.service';

@Component({
  selector: 'app-protocolos',
  templateUrl: './protocolos.component.html',
  styleUrls: ['./protocolos.component.css']
})
export class ProtocolosComponent implements OnInit {
  loading: boolean = true;
  pacienteId: string;
  listaProtocolos: any;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private protocolosService: ProtocolosService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.pacienteId = params.get('id');
        this.getProtocolos(this.pacienteId);
        this.loading = false;
      });
  }

  getProtocolos(id) {
    this.protocolosService.getList(id)
      .subscribe(resp => {
        this.listaProtocolos = resp.protocolos;
      }, error => error)
  }

  newProtocolo() {
    this.dialog.open(ModalProtocolosComponent, {
      data: { pacienteId: this.pacienteId }
    })
      .afterClosed()
      .subscribe(resp => {
        if (resp) {
          if (resp) {
            resp['paciente_id'] = parseInt(this.pacienteId);
            this.insertProtocolo(resp);
          }
        }
      });
  }

  insertProtocolo(data) {
    this.protocolosService.put(data)
      .subscribe(resp => {
        this.snackBar.open('Protocolo ingresado correctamente!', "Ok", { duration: 2000 });
        this.getProtocolos(this.pacienteId);
      }, error => error)
  }

}
