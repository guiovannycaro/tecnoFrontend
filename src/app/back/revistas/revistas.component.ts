import { Component  , OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CommicService } from '../../services/commic.service';

import { CommicGenero } from '../../modelos/commicgenero';

@Component({
  selector: 'app-revistas',
  templateUrl: './revistas.component.html',
  styleUrl: './revistas.component.css'
})
export class RevistasComponent {
  commic: CommicGenero[] = [];
  commicd: CommicGenero = new CommicGenero();
  compref: CommicGenero[] = [];
  usuario: string  = '';

   constructor(private api:CommicService,private router:Router,public dialog: MatDialog,private routea: ActivatedRoute) {}

   ngOnInit(): void {

    this.usuario = sessionStorage.getItem('username') || '';

    this.obtenerCommics();
    this.obtenerPreferidos(this.usuario);
  }

  private obtenerCommics(){
    this.api.getCommicGeneroList().subscribe(dato=>{
      console.log(dato);
     this.commic = dato;
    })
  }

  private obtenerPreferidos(usuario:string) {

     this.api.getCommicsPrefUsuario(usuario).subscribe(data=>{
      this.compref =data;
     },error=> console.log(error));

  }

  openEditProForm(id: number,idgen:number) {
    if (!id && !idgen) {
      console.error("Error: ID es undefined o null");
      return;
    }
    this.router.navigate(['dashboard/vseleccion/', id,idgen]);
  }

  estaEnPreferencias(comicId: number): boolean {
    return this.compref.some(pref => pref.com_id === comicId);
  }

}

