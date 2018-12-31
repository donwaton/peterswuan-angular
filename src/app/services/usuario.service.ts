import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Usuarios, Usuario } from '../domain/Usuarios'

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
    return this.http.get<Usuarios>(this.ROOT_URL + '/listausuarios', httpOptions)
  }

  insert(data){
    return this.http.put(this.ROOT_URL + '/usuario', data, httpOptions)
  }

  get(id){
    return this.http.get<Usuario>(this.ROOT_URL + '/usuario/' + id, httpOptions)
  }

  update(id, data){
    return this.http.post(this.ROOT_URL + '/usuario/' + id, data, httpOptions)
  }
  
}
