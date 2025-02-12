export class Personas{
  per_idpersona: number;
  per_nombres: string;
  per_apellidos:  string;
  per_idtipodocumento:  number;
  per_numdocumento:  string;
  per_numtelefono:  string;
  per_email:string;
  per_direccion:string;
  per_idciudad:number;



  constructor(){
    this.per_idpersona = 0;
  this.per_nombres = "";
  this.per_apellidos = "";
  this.per_idtipodocumento =  0;
  this.per_numdocumento =  "";
  this.per_numtelefono =  "";
  this.per_email = "";
  this.per_direccion = "";
  this.per_idciudad =0;
  }

}
