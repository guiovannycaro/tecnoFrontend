import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Ciudad} from '../modelos/ciudad';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {


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



    getCiudadcList(): Observable<any>{
      let direccion = this.baseUrl + "/Ciudad/ListarCiudad";
      let response = this.http.get<any>(direccion,this.httpOptions);
      console.log(response);
      return response;
    }

    getCiudadById(data:any): Observable<any>{

      console.log("parametro a enviar " + data)
      let direccion = this.baseUrl + "Ciudad/ListarCiudadById?id=" + data;
      let response = this.http.get<any>(direccion);
      console.log(response);
      return response;
     }

     createCiudad(usuarios: Ciudad): Observable<any>{
      let direccion = this.baseUrl + "/Ciudad/CrearCiudad";
      let response = this.http.post<any>(direccion,usuarios);

      return response;

     }



     actualizarCiudad(usuarios: Ciudad): Observable<any>{
      let direccion = this.baseUrl + "/Ciudad/ActualizarCiudad";
      let response = this.http.post<any>(direccion,usuarios);
      console.log(response);
      return response;
     }

     eliminarCiudad(data:any): Observable<any>{

      console.log("parametro a enviar " + data)
      let direccion = this.baseUrl + "Ciudad/EliminarCiudad?id=" + data;
      let response = this.http.get<any>(direccion);
      console.log(response);
      return response;
     }
}

