import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuarios } from '../domain/Usuarios'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ROOT_URL = environment.API_ROOT_URL+'usuarios';
  
  constructor(private http: HttpClient) { }

  getList(){
    return this.http.get<Usuarios>(this.ROOT_URL + '/listausuarios',httpOptions)
  }

  insert(data){
    return this.http.put(this.ROOT_URL + '/usuario', data)
  }
  
}
