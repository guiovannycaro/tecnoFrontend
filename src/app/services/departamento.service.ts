import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {Departamentos} from '../modelos/departamento';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {




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



  getDepartamentoslList(): Observable<any>{
    let direccion = this.baseUrl + "/Departamentos/ListarDepartamentos";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

  getDepartamentosById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Departamentos/ListarDepartamentosById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   createDepartamentos(usuarios: Departamentos): Observable<any>{
    let direccion = this.baseUrl + "/Departamentos/CrearDepartamento";
    let response = this.http.post<any>(direccion,usuarios);

    return response;

   }



   actualizarDepartamentos(usuarios: Departamentos): Observable<any>{
    let direccion = this.baseUrl + "/Departamentos/ActualizarDepartamentos";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarDepartamentos(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "Departamentos/EliminarDepartamento?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }
}

