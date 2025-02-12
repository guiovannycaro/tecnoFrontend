import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Commic } from '../../modelos/commic';
import { CommicService } from '../../services/commic.service';

@Component({
  selector: 'app-verdetgeneros',
  templateUrl: './verdetgeneros.component.html',
  styleUrl: './verdetgeneros.component.css'
})
export class VerdetgenerosComponent implements OnInit{


    comic: Commic[] = [];
    commicd: Commic = new Commic();

     constructor(
          private _fb:FormBuilder,
          private api:CommicService,private router:Router,private routea: ActivatedRoute) {
          }

          ngOnInit(): void {
            let datos = history.state.data;

            if (!datos) {
              console.warn('No hay datos obteniendo desde la URL');
              datos = this.routea.snapshot.paramMap.get('id');
            }

            console.log('Valor obtenido:', datos);



    if (datos) {
      this.api.getCommicById(datos).subscribe(data=>{
        this.comic =data;
       },error=> console.log(error));


      } else {
        console.error('No se pudo obtener un ID válido a enviar');
      }
    }

}
