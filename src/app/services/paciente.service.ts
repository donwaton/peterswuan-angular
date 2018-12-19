import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pacientes } from '../domain/Pacientes';
import { Paciente } from '../domain/Paciente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  //readonly ROOT_URL = 'http://hcifuentes.com/API_peterswuan/index.php/pacientes';
  readonly ROOT_URL = '/API_peterswuan/index.php/pacientes';
  
  constructor(private http: HttpClient) { }

  getListaPacientes(){
    return this.http.get<Pacientes>(this.ROOT_URL + '/listapacientes',httpOptions);
  }

  getPaciente(id:number){
    return this.http.get<Paciente>(this.ROOT_URL + '/paciente/'+id,httpOptions);
  }

  insertPaciente(data:any){
    return this.http.put(this.ROOT_URL + '/paciente',data,httpOptions);
  }

  updatePaciente(id,data:any){
    return this.http.post(this.ROOT_URL + '/paciente/'+id,data,httpOptions);
  }

}
