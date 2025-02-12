export class Ciudad{
  ciu_idciudad: number;
  ciu_nombre: string;
  ciu_codoficial:  string;
  ciu_latitud:  string;
  ciu_longitud:  string;
  ciu_iddepartamento:  number;
  ciu_epestado:boolean;
  ciu_codpostal:string;
  updated_at:string;
  created_at:string;

  constructor(){

    this.ciu_idciudad = 0;
  this.ciu_nombre ="";
  this.ciu_codoficial ="";
  this.ciu_latitud ="";
  this.ciu_longitud ="";
  this.ciu_iddepartamento = 0;
  this.ciu_epestado =true;
  this.ciu_codpostal ="";
  this.updated_at="";
  this.created_at="";
  }

}
