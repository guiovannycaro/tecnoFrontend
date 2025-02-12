import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Perfil} from '../modelos/perfil';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

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



  getPerfilList(): Observable<any>{
    let direccion = this.baseUrl + "/Perfil/ListarPerfil";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getPerfilById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Perfil/ListarPerfilById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createPerfil(usuarios: Perfil): Observable<any>{
    let direccion = this.baseUrl + "/Perfil/CrearPerfil";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarPerfil(usuarios: Perfil): Observable<any>{
    let direccion = this.baseUrl + "/Perfil/ActualizarPerfil";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarPerfil(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Perfil/EliminarPerfil?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}
