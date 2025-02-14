import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Preferencias} from '../modelos/preferencias';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PreferidosService {
 private baseUrl = "http://localhost:8090/tecno/AppAdmin";
  id: number;
  constructor(private http: HttpClient) {
    this.id =0;

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  getPreferenciasList(): Observable<any>{
    let direccion = this.baseUrl + "/Preferencias/ListarPreferencias";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getPreferenciasById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Preferencias/ListarPreferenciasById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }


   devolGenPrefUsuario(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "/Preferencias/DevolGenPrefUsuario?datos=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   devolGenComicPrefUsuario(data:any,usuario:string): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "/Preferencias/DevolGenComicPrefUsuario?datos=" + data +"&usuario="+usuario;
   console.log(direccion);
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createPreferencias(usuarios: Preferencias): Observable<any>{
    let direccion = this.baseUrl + "/Preferencias/CrearPreferencias";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarPreferencias(usuarios: Preferencias): Observable<any>{
    let direccion = this.baseUrl + "/Preferencias/ActualizarPreferencias";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarPreferencias(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Preferencias/EliminarPreferencias?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}
