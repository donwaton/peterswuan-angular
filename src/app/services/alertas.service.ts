import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Alertas } from '../domain/Alertas';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  ROOT_URL = environment.API_ROOT_URL+'alertas';

  constructor(private http: HttpClient) { }

  get(id){
    return this.http.get<Alertas>(this.ROOT_URL + '/alerta/'+id,httpOptions);
  }

  insert(data){
    return this.http.put(this.ROOT_URL + '/alerta/', data, httpOptions);
  }
}
