import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { GeneroService } from '../../services/genero.service';


import { Generos } from '../../modelos/generos';





@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})

export class GenerosComponent{
  genero: Generos[] = [];
  generod: Generos = new Generos();
  constructor(private api:GeneroService,private router:Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerGenero();
  }

  private obtenerGenero(){
   this.api.getGeneroslList().subscribe(dato=>{
     console.log(dato);
    this.genero = dato;
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
