import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { formatDate } from '@angular/common';
import { SignosVitalesService } from '../../../services/signos-vitales.service';
import { ModalSignosVitalesComponent } from '../../modals/modal-signos-vitales/modal-signos-vitales.component';
import { ModalSignosVitales24hComponent } from '../../modals/modal-signos-vitales24h/modal-signos-vitales24h.component';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})
export class SignosVitalesComponent implements OnInit {
  signosVitales: any;
  pacienteId: string;

  constructor(private dialog: MatDialog, 
    private route: ActivatedRoute,
    private signosVitalesService: SignosVitalesService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.pacienteId = params.get('id');
      this.getSV(params.get('id'));
    });
  }

  getSV(id){
    this.signosVitalesService.getSignosVitales(id)
      .subscribe(resp => {
        this.signosVitales = resp.signos_vitales
      },
      error => error
    )
  }

  openDialog(){
    this.dialog.open(ModalSignosVitalesComponent)
      .afterClosed()
      .subscribe(resp => {
        if(resp) {
          resp['paciente_id'] = parseInt(this.pacienteId);
          this.insertSV(resp);
        }
      });
  }

  view24h(){
    this.dialog.open(ModalSignosVitales24hComponent,{
      data: {pacienteId: this.pacienteId}
    })
  }

  insertSV(data){
    this.signosVitalesService.insertSignosVitales(data)
      .subscribe(resp => {
        this.snackBar.open('Signos vitales ingresados!',"ok",{duration: 2000});
        this.signosVitales = data;
      },
      error => error
    )
  }

}
