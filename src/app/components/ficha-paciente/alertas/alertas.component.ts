import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../../../services/alertas.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalAlertasComponent } from '../../modals/modal-alertas/modal-alertas.component';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {
  alertas: any;
  pacienteId;

  constructor(
    private dialog: MatDialog, 
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private alertasService: AlertasService
    ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.pacienteId = params.get('id');
      this.getAlertas(this.pacienteId);
    });
  }

  getAlertas(id) {
    this.alertasService.get(id)
      .subscribe(resp=>{
        this.alertas = resp.alertas;
      })
  }

  openDialog(){
    this.dialog.open(ModalAlertasComponent, {
      width: '400px'
    })
      .afterClosed()
      .subscribe(resp => {
        if(resp) {
          resp['paciente_id'] = parseInt(this.pacienteId);
          resp['user_id'] = parseInt(localStorage.getItem('user_id'));
          this.insertAlerta(resp);
        }
      });
  }

  insertAlerta(data){
    this.alertasService.insert(data)
      .subscribe(resp=>{
        this.snackBar.open('Se ha generado la alerta para el paciente',"Ok",{duration: 2000});
        this.getAlertas(this.pacienteId);
      },
        error => error
      )
  }

}
