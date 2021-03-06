import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medicamentos } from '../domain/Medicamentos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  ROOT_URL = environment.API_ROOT_URL+'medicamentos';
  
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<Medicamentos>(this.ROOT_URL + '/listamedicamentos', httpOptions)
  }

  putAdm(data){
    return this.http.put(this.ROOT_URL + '/admmedpac', data, httpOptions)
  }
}
