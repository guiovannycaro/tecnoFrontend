import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommicGenero } from '../../modelos/commicgenero';
import { CommicgeneroService } from '../../services/commicgenero.service';
import { Router } from '@angular/router';
import { Commic } from '../../modelos/commic';
import { Generos } from '../../modelos/generos';

@Component({
  selector: 'app-detgeneros',
  templateUrl: './detgeneros.component.html',
  styleUrl: './detgeneros.component.css'
})
export class DetgenerosComponent implements OnInit{

  genero: Generos[] = [];
  comic: Commic[] = [];
  generod: Commic = new Commic();
    constructor(
      private _fb:FormBuilder,
      private api:CommicgeneroService,private router:Router,private routea: ActivatedRoute) {
      }



      openComForm(id: any) {
        console.log("valor de data " + id);
        if (!id) {
          console.error("Error: data es undefined o null");
          return;
        }
        this.router.navigate(['vdetgenero',id]);
      }

  ngOnInit(): void {
    let datos = history.state.data;

    if (!datos) {
      console.warn('No hay datos obteniendo desde la URL');
      datos = this.routea.snapshot.paramMap.get('id');
    }

    console.log('Valor obtenido:', datos);


    if (datos) {
    this.api.getCommicGeneroById(datos).subscribe(data=>{
      this.comic =data;
     },error=> console.log(error));


     this.api.getGeneroById(datos).subscribe(data=>{
      this.genero =data;
     },error=> console.log(error));

    } else {
      console.error('No se pudo obtener un ID válido a enviar');
    }
  }
}

