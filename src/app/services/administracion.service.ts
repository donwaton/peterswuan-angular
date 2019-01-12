import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdmMed, Medicamentos } from '../domain/Medicamentos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

  ROOT_URL = environment.API_ROOT_URL+'administracion';
  
  constructor(private http: HttpClient) { }

  getList(id){
    return this.http.get<AdmMed>(this.ROOT_URL + '/listaadministracion/' + id, httpOptions)
  }

  putRegAdm(data){
    return this.http.put(this.ROOT_URL + '/registaradministracion', data, httpOptions)
  }
}
