import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicamentosService } from '../../../services/medicamentos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalAdmMedComponent } from '../../modals/modal-adm-med/modal-adm-med.component';
import { AdministracionService } from '../../../services/administracion.service';
import { ModalConfirmacionComponent } from '../../modals/modal-confirmacion/modal-confirmacion.component';

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
    private medicamentosService: MedicamentosService,
    private administracionService: AdministracionService
  ) { }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      this.pacienteId = params.get('id');
      this.getAL(this.pacienteId);
    });
  }

  getAL(id){
    this.administracionService.getList(id)
      .subscribe(resp => {
        this.listaAdmMed = resp.listaadministracion;
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
    this.medicamentosService.putAdm(data)
      .subscribe(resp => {
        this.snackBar.open('Horario de administración de medicamentos ingresado correctamente!',"Ok",{duration: 2000});
        this.getAL(this.pacienteId);
      },
      error => error
    )
  }

  confirmation(id){
    this.dialog.open(ModalConfirmacionComponent)
    .afterClosed()
    .subscribe(resp => {
      if(resp) {
        this.checkMedicamento(id);
      }
    });
  }

  checkMedicamento(id){ 
    let data: Object = {user_id: 0, hi_id: 0};
    data['user_id'] = parseInt(localStorage.getItem('user_id'));
    data['hi_id'] = parseInt(id);
    this.insertMedicamento(data);
  }

  insertMedicamento(data){
    this.administracionService.putRegAdm(data)
    .subscribe(resp => {
      this.snackBar.open('Administración de medicamentos registrada correctamente!',"Ok",{duration: 2000});
      this.getAL(this.pacienteId);
    },
  error => error
  )
  }

}
