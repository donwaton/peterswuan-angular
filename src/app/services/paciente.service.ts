import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacientes } from '../domain/Pacientes';
import { Paciente } from '../domain/Paciente';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  readonly ROOT_URL = 'http://hcifuentes.com/API_peterswuan/index.php/pacientes';
  

  constructor(private http: HttpClient) { }

  getListaPacientes(){
    return this.http.get<Pacientes>(this.ROOT_URL + '/listapacientes');
  }

  getPaciente(id:number){
    return this.http.get<Paciente>(this.ROOT_URL + '/paciente/'+id);
  }

}
