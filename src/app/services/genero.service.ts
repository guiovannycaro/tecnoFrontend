import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Generos} from '../modelos/generos';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {



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



  getGeneroslList(): Observable<any>{
    let direccion = this.baseUrl + "/Generos/ListarGeneros";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }


  getGenerosById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Generos/ListarGenerosById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createGeneros(usuarios: Generos): Observable<any>{
    let direccion = this.baseUrl + "/Generos/CrearGeneros";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarGeneros(usuarios: Generos): Observable<any>{
    let direccion = this.baseUrl + "/Generos/ActualizarGeneros";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarGeneros(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Generos/EliminarGeneros?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}

