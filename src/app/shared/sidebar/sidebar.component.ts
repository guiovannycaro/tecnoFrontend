import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Perfil } from '../../modelos/perfil';
import { SeguridadService } from '../../services/seguridad.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

   perfil: string = "";
  perfild: Perfil = new Perfil();

  public estado: number | undefined; // Estado del usuario
  public nombre: string | undefined; // Nombre del usuario
  public rol: boolean = false; // Inicializar el rol por defecto
  public menuItems: any[] = [];
  public secciontems: any[] = [];
  usuario: string | null = '';


 constructor(
      private _fb:FormBuilder,
      private api:SeguridadService,private router:Router,) {
      }

  ngOnInit() {

    this.usuario = sessionStorage.getItem('username');
    console.log('Usuario recuperado dasboard:', this.usuario);
    this.obtenerPerfilUsuario(this.usuario);

  }

  private obtenerPerfilUsuario(usuario: any){

    this.api.obtenerPerfil(usuario).subscribe(data=>{
      this.perfil =String(data);

     },error=> console.log(error));
  }

  esPerfilPermitido(): boolean {

   // return this.perfil === "1" || this.perfil === "2";
     return this.perfil === "3" || this.perfil === "1" ;
  }

  esPermitidoAdmin(): boolean {

    // return this.perfil === "1" || this.perfil === "2";
      return this.perfil === "1" || this.perfil === "2" ;
   }

  logout() {
    location.href = 'login'; // Redirige al login
  }
}
