import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Insumos } from '../domain/Insumos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InsumosService {
 
  ROOT_URL = environment.API_ROOT_URL+'insumos';
  
  constructor(private http: HttpClient) { }

  getList(id?){
    return this.http.get<Insumos>(this.ROOT_URL + '/insumos/' + id, httpOptions)
  }

  put(data){
    return this.http.put(this.ROOT_URL + '/insumo/', data, httpOptions)
  }
}
