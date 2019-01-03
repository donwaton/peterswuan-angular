import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicamentosService } from '../../../services/medicamentos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdmMedComponent } from '../../modals/modal-adm-med/modal-adm-med.component';

@Component({
  selector: 'app-adm-medicamentos',
  templateUrl: './adm-medicamentos.component.html',
  styleUrls: ['./adm-medicamentos.component.css']
})
export class AdmMedicamentosComponent implements OnInit {
  loading = true;
  listaAdmMed: any;
  pacienteId: string;

  constructor(
    private dialog: MatDialog, 
    private route: ActivatedRoute, 
    private snackBar: MatSnackBar,
    private medicamentosService: MedicamentosService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.pacienteId = params.get('id');
      this.getAL(this.pacienteId);
    });
  }

  getAL(id){
    this.medicamentosService.getAdmList(id)
      .subscribe(resp => {
        this.listaAdmMed = resp.adm_medicamentos;
        this.loading = false;
      },
      error => error
    )
  }

  newAdmMed(){
    this.dialog.open(ModalAdmMedComponent, {
      width: '800px'
    })
    .afterClosed()
    .subscribe(resp => {
      if(resp) {
        resp['paciente_id'] = parseInt(this.pacienteId);
        resp['user_id'] = parseInt(localStorage.getItem('user_id'));
        this.insertAdmMed(resp); 
      }
    });
  }

  insertAdmMed(data){
    this.medicamentosService.put(data)
      .subscribe(resp => {
        this.snackBar.open('Administración de medicamentos ingresada correctamente!',"Ok",{duration: 2000});
        this.getAL(this.pacienteId);
      },
      error => error
    )
  }

}
