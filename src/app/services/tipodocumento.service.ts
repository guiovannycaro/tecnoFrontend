import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';

import {TipoDocumento} from '../modelos/tipodocumento';
import {ResponceI} from '../modelos/ResponceI';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {


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



   getTipoDocumentoList(): Observable<any>{
     let direccion = this.baseUrl + "/TipoDocumento/ListarTipoDocumento";
     let response = this.http.get<any>(direccion,this.httpOptions);
     console.log(response);
     return response;
   }

   getTipoDocumentoById(data:any): Observable<any>{

     console.log("parametro a enviar " + data)
     let direccion = this.baseUrl + "TipoDocumento/ListarTipoDocumentoById?id=" + data;
     let response = this.http.get<any>(direccion);
     console.log(response);
     return response;
    }

    createTipoDocumento(usuarios: TipoDocumento): Observable<any>{
     let direccion = this.baseUrl + "/TipoDocumento/CrearTipoDocumento";
     let response = this.http.post<any>(direccion,usuarios);

     return response;

    }



    actualizarTipoDocumento(usuarios: TipoDocumento): Observable<any>{
     let direccion = this.baseUrl + "/TipoDocumento/ActualizarTipoDocumento";
     let response = this.http.post<any>(direccion,usuarios);
     console.log(response);
     return response;
    }

    eliminarTipoDocumento(data:any): Observable<any>{

     console.log("parametro a enviar " + data)
     let direccion = this.baseUrl + "TipoDocumento/EliminarTipoDocumento?id=" + data;
     let response = this.http.get<any>(direccion);
     console.log(response);
     return response;
    }
}
