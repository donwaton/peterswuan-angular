import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignosVitalesService } from '../../../services/signos-vitales.service';

@Component({
  selector: 'app-modal-signos-vitales24h',
  templateUrl: './modal-signos-vitales24h.component.html',
  styleUrls: ['./modal-signos-vitales24h.component.css']
})
export class ModalSignosVitales24hComponent implements OnInit {
  loading = true;
  signosVitales24 : Array<any>;
  displayedColumns: string[] = ['sv_date','user_names','sv_fc', 'sv_fr', 'sv_so', 'sv_temp'];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private signosVitalesService: SignosVitalesService) {
   }

  ngOnInit() {
    this.signosVitalesService.getSignosVitales24h(this.data.pacienteId)
      .subscribe(resp=>{
        this.signosVitales24 = resp.signos_vitales;
        this.loading = false;
      })
  }

}
