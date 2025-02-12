export class Commic{
  com_id: number;
  com_nombre: string;
  com_fechaPublicacion:  string;
  com_escritor:  string;
  com_dibujante:  string;
  com_artportada:string;
  com_descripcion:string;
  com_imagen:string;
  com_estado:boolean;

  constructor(){
    this.com_id = 0;
  this.com_nombre = "";
  this.com_fechaPublicacion = "";
  this.com_escritor = "";
  this.com_dibujante = "";
  this.com_artportada = "";
  this.com_descripcion = "";
  this.com_imagen = "";
  this.com_estado = true;
  }

}
