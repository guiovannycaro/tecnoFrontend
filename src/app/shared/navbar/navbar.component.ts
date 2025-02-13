import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { personaUsuario } from '../../modelos/personaUsuario';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
perusu: personaUsuario[] = [];
perusud: personaUsuario = new personaUsuario();
  usuario: string | null = '';
  constructor(
       private _fb:FormBuilder,
       private api:UsuariosService,private router:Router,) {
       }

       ngOnInit() {
        this.usuario = sessionStorage.getItem('username');
        console.log('Usuario recuperado dasboard:', this.usuario);
        this.obtenerPerfilUsuario(this.usuario);

       }

       private obtenerPerfilUsuario(usuario: any){

        this.api.getUsuarioPerfil(usuario).subscribe(data=>{
          this.perusu =data;

         },error=> console.log(error));
      }

  logout() {
    localStorage.removeItem('username');
    this.router.navigate(['/index']);// Redirige al login
  }
}
