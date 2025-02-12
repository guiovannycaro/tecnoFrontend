export class Usuarios{
  usu_idusuario: number;
  usu_idpersona: number;
  usu_username:  string;
  usu_contrasena:  string;
  usu_estado:  boolean;
  usu_cambiocontrasena:  boolean;

  constructor(){
    this.usu_idusuario = 0;
  this.usu_idpersona = 0;
  this.usu_username = "";
  this.usu_contrasena =  "";
  this.usu_estado =  true;
  this.usu_cambiocontrasena =  true;
  }

}
