import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Commic } from '../../modelos/commic';
import { PreferidosService } from '../../services/preferidos.service';

@Component({
  selector: 'app-vcomicdetalle',
  templateUrl: './vcomicdetalle.component.html',
  styleUrl: './vcomicdetalle.component.css'
})
export class VcomicdetalleComponent  implements OnInit{

  comic: Commic[] = [];
  commicd: Commic = new Commic();
  usuario: string | null = '';
  constructor(
    private _fb:FormBuilder,
    private api:PreferidosService,private router:Router,private routea: ActivatedRoute) {
    }

    ngOnInit(): void {

      this.usuario = sessionStorage.getItem('username');
      console.log('Usuario recuperado dasboard:', this.usuario);

      let datos = history.state.data;


      if (!datos) {
        console.warn('No hay datos obteniendo desde la URL');
        datos = this.routea.snapshot.paramMap.get('id');
      }

      console.log('Valor obtenido:', datos);



if (datos) {


this.api.devolGenComicPrefUsuario(datos,this.usuario ?? "").subscribe(data=>{
  this.comic =data;
 },error=> console.log(error));


} else {
  console.error('No se pudo obtener un ID válido a enviar');
}
}

}

