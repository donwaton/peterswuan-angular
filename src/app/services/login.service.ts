import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../domain/Usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  ROOT_URL = environment.API_ROOT_URL+'login';
  
  constructor(private http: HttpClient) { }

  login(data){
    return this.http.post<Usuario>(this.ROOT_URL + '/login', data, httpOptions);
  }

}
