export class Generos{
  gen_Id: number;
  gen_nombre: string;
  gen_descripcion:  string;
  gen_imagen:  string;
  gen_estado:  boolean;

  constructor(){
    this.gen_Id = 0;
    this.gen_nombre = "";
    this.gen_descripcion = "";
    this.gen_imagen = "";
    this.gen_estado = true;
  }

}
