import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { PreferidosService } from '../../services/preferidos.service';

import { Preferencias } from '../../modelos/preferencias';
import { Generos } from '../../modelos/generos';

@Component({
  selector: 'app-preferidos',
  templateUrl: './preferidos.component.html',
  styleUrl: './preferidos.component.css'
})
export class PreferidosComponent {
  preferidos: Generos[] = [];

  preferidosd: Preferencias = new Preferencias();

   constructor(private api:PreferidosService,private router:Router,public dialog: MatDialog) {}

    ngOnInit(): void {
      this.obtenerPreferido();
    }

    private obtenerPreferido(){
      this.api.getPreferenciasList().subscribe(dato=>{
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
       this.router.navigate(['detgeneros',id]);
     }
}
