import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Antropometricos } from '../domain/Antropometricos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AntropometricosService {

  ROOT_URL = environment.API_ROOT_URL+'antropometricos';

  constructor(private http: HttpClient) { }

  get(id){
    return this.http.get<Antropometricos>(this.ROOT_URL + '/antropometrico/' + id, httpOptions);
  }

  put(data){
    return this.http.put(this.ROOT_URL + '/antropometrico/', data, httpOptions);
  }

}
