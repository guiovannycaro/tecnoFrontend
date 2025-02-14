import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Commic} from '../modelos/commic';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommicService {

  private baseUrl = "http://localhost:8090/tecno/AppAdmin/";
    id: number;
    constructor(private http: HttpClient) {
      this.id =0;

    }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }



    getCommicList(): Observable<any>{
      let direccion = this.baseUrl + "/Commic/ListarCommics";
      let response = this.http.get<any>(direccion,this.httpOptions);
      console.log(response);
      return response;
    }

    getCommicGeneroList(): Observable<any>{
      let direccion = this.baseUrl + "/Commic/ListarCommicsGenero";
      let response = this.http.get<any>(direccion,this.httpOptions);
      console.log(response);
      return response;
    }

    getCommicById(data:any): Observable<any>{

      console.log("parametro a enviar " + data)
      let direccion = this.baseUrl + "Commic/ListarCommicById?id=" + data;
      let response = this.http.get<any>(direccion);
      console.log(response);
      return response;
     }

     getCommicsPrefUsuario(user:any): Observable<any>{
      console.log("parametro a enviar " + user)
      let direccion = this.baseUrl + "Commic/obtCommicsPrefUsuario?datos=" + user;
      let response = this.http.get<any>(direccion);
      console.log(response);
      return response;

     }

     createCommic(usuarios: Commic): Observable<any>{
      let direccion = this.baseUrl + "/Commic/CrearCommic";
      let response = this.http.post<any>(direccion,usuarios);

      return response;

     }



     actualizarCommic(usuarios: Commic): Observable<any>{
      let direccion = this.baseUrl + "/Commic/ActualizarCommic";
      let response = this.http.post<any>(direccion,usuarios);
      console.log(response);
      return response;
     }

     eliminarCommic(data:any): Observable<any>{

      console.log("parametro a enviar " + data)
      let direccion = this.baseUrl + "Commic/EliminarCommic?id=" + data;
      let response = this.http.get<any>(direccion);
      console.log(response);
      return response;
     }
}
