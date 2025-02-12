import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Pais} from '../modelos/pais';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


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



  getPaislList(): Observable<any>{
    let direccion = this.baseUrl + "/Pais/ListarPais";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getPaisById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Pais/ListarPaisById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createPais(usuarios: Pais): Observable<any>{
    let direccion = this.baseUrl + "/Pais/CrearPais";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarPais(usuarios: Pais): Observable<any>{
    let direccion = this.baseUrl + "/Pais/ActualizarPais";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarPais(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Pais/EliminarPais?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}
