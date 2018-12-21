import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSignosVitalesComponent } from '../../modals/modal-signos-vitales/modal-signos-vitales.component';
import { ActivatedRoute } from '@angular/router';
import { SignosVitalesService } from '../../../services/signos-vitales.service';

@Component({
  selector: 'app-signos-vitales',
  templateUrl: './signos-vitales.component.html',
  styleUrls: ['./signos-vitales.component.css']
})
export class SignosVitalesComponent implements OnInit {
  signosVitales: any;

  constructor(private dialog: MatDialog, private route: ActivatedRoute,private signosVitalesService: SignosVitalesService) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.getPaciente(params.get('id'))
    });
  }

  getPaciente(id){
    this.signosVitalesService.getSignosVitales(id)
      .subscribe(resp => {
        this.signosVitales = resp.signos_vitales
      },
      error => error
    )
  }

  openDialog(){
    this.dialog.open(ModalSignosVitalesComponent)
  }

}
