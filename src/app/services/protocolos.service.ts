import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Protocolos } from '../domain/Protocolos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProtocolosService {

  ROOT_URL = environment.API_ROOT_URL+'protocolos';
  
  constructor(private http: HttpClient) { }

  getList(id){
    return this.http.get<Protocolos>(this.ROOT_URL + '/protocolos/' + id, httpOptions)
  }

  put(data){
    return this.http.put(this.ROOT_URL + '/protocolo/', data, httpOptions)
  }
}
