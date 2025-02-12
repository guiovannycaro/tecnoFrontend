import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {CommicGenero} from '../modelos/commicgenero';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommicgeneroService {




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

  getGeneroById(data:any) : Observable<any>{
    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "CommicGenero/obtenerNombreGeneroById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;

  }

  getCommicGenerolList(): Observable<any>{
    let direccion = this.baseUrl + "/CommicGenero/ListarCommicGenero";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getCommicGeneroById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "CommicGenero/ListarCommicGeneroById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createCommicGenero(usuarios: CommicGenero): Observable<any>{
    let direccion = this.baseUrl + "/CommicGenero/CrearCommicGenero";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarCommicGenero(usuarios: CommicGenero): Observable<any>{
    let direccion = this.baseUrl + "/CommicGenero/ActualizarCommicGenero";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarCommicGenero(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "CommicGenero/EliminarCommicGenero?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}

