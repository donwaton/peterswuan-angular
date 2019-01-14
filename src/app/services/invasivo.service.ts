import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Invasivos } from '../domain/Insumos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InvasivoService {

  ROOT_URL = environment.API_ROOT_URL+'invasivos';
  
  constructor(private http: HttpClient) { }

  getList(id){
    return this.http.get<Invasivos>(this.ROOT_URL + '/listainvasivos/' + id, httpOptions)
  }

  put(data){
    return this.http.put(this.ROOT_URL + '/invasivo/', data, httpOptions)
  }
}
