import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PacienteInsumos } from '../domain/Insumos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PacienteInsumoService {
   
  ROOT_URL = environment.API_ROOT_URL+'pacienteinsumos';
  
  constructor(private http: HttpClient) { }

  getInvasivos(id){
    return this.http.get<PacienteInsumos>(this.ROOT_URL + '/listainsumos/' + id + '/6', httpOptions)
  }

  put(data){
    return this.http.put(this.ROOT_URL + '/insumo/', data, httpOptions)
  }
}
