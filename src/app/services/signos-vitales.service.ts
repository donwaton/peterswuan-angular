import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignosVitales } from '../domain/SignosVitales';
import { environment } from '../../environments/environment';

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
  
  ROOT_URL = environment.API_ROOT_URL+'signosvitales';

  constructor(private http: HttpClient) { }

  getSignosVitales(id){
    return this.http.get<SignosVitales>(this.ROOT_URL + '/signosvitales/'+id,httpOptions);
  }

  getSignosVitales24h(id){
    return this.http.get<SignosVitales>(this.ROOT_URL + '/signosvitales24h/'+id,httpOptions);
  }

  insertSignosVitales(data:any){
    return this.http.put(this.ROOT_URL + '/signosvitales',data,httpOptions);
  }
}
