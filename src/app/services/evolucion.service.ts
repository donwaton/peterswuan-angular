import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Evolucion } from '../domain/Evolucion';
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
export class EvolucionService {

  ROOT_URL = environment.API_ROOT_URL+'evolucion';

  constructor(private http: HttpClient) { }

  getListaEvolucion(id){
    return this.http.get<Evolucion>(this.ROOT_URL + '/listaevolucion/'+id,httpOptions);
  }

  insertEvolucion(data:any){
    return this.http.put(this.ROOT_URL + '/evolucion/',data,httpOptions);
  }
}
