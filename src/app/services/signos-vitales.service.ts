import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignosVitales } from '../domain/SignosVitales';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': '3006083b-dccd-4bf3-afa0-fa995383a067'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignosVitalesService {

  //readonly ROOT_URL = 'http://hcifuentes.com/API_peterswuan/index.php/pacientes';
  readonly ROOT_URL = '/API_peterswuan/index.php/signosvitales';
  
  constructor(private http: HttpClient) { }

  getSignosVitales(id){
    return this.http.get<SignosVitales>(this.ROOT_URL + '/signosvitales/'+id,httpOptions);
  }
}
