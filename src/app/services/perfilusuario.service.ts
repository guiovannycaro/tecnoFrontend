import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {PerfilUsuario} from '../modelos/perfilUsuario';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PerfilusuarioService {
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



  getPerfilUsuarioList(): Observable<any>{
    let direccion = this.baseUrl + "/PerfilUsuario/ListarPerfilUsuario";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getPerfilUsuarioById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "PerfilUsuario/ListarPerfilUsuarioById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createPerfilUsuario(usuarios: PerfilUsuario): Observable<any>{
    let direccion = this.baseUrl + "/PerfilUsuario/CrearPerfilUsuario";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarPerfilUsuario(usuarios: PerfilUsuario): Observable<any>{
    let direccion = this.baseUrl + "/PerfilUsuario/ActualizarPerfilUsuario";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarPerfilUsuario(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "PerfilUsuario/EliminarPerfilUsuario?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}

