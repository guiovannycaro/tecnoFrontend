import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Usuarios} from '../modelos/usuarios';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

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



  getUsuariosList(): Observable<any>{
    let direccion = this.baseUrl + "/Usuarios/ListarUsuarios";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getusuarioById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Usuarios/ListarUsuariosById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createUsuarios(usuarios: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "/Usuarios/CrearUsuarios";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarUsuarios(usuarios: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "/Usuarios/ActualizarUsuario";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarusuario(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Usuarios/EliminarUsuario?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}
