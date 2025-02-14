import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';


import { PreferidosService } from '../../services/preferidos.service';

import { Preferencias } from '../../modelos/preferencias';
import { Generos } from '../../modelos/generos';

@Component({
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrl: './preferencias.component.css'
})
export class PreferenciasComponent {
  preferidos: Generos[] = [];
  preferidosd: Preferencias = new Preferencias();
  usuario: string | null = '';
  constructor(private api:PreferidosService,private router:Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.usuario = sessionStorage.getItem('username');
    console.log('Usuario recuperado dasboard:', this.usuario);
    this.getPreferenciasUsuario(this.usuario);
  }


  private getPreferenciasUsuario(usuario: any){
    this.api.devolGenPrefUsuario(usuario).subscribe(dato=>{
      console.log(dato);
     this.preferidos = dato;
    })
   }

   openEditProForm(id: any) {
     console.log("valor de data " + id);
     if (!id) {
       console.error("Error: data es undefined o null");
       return;
     }
     this.router.navigate(['/dashboard/vcommicdet/',id]);
   }


}
