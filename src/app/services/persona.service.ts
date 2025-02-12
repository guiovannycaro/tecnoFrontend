import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Personas} from '../modelos/personas';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
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



  getPersonasList(): Observable<any>{
    let direccion = this.baseUrl + "/Personas/ListarPersonas";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getPersonasById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Personas/ListarPersonaById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createPersonas(usuarios: Personas): Observable<any>{
    let direccion = this.baseUrl + "/Personas/CrearPersona";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarPersonas(usuarios: Personas): Observable<any>{
    let direccion = this.baseUrl + "/Personas/ActualizarPersona";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarPersonas(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Personas/EliminarPersona?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}
