import { Component  , OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CommicService } from '../../services/commic.service';


import { Commic } from '../../modelos/commic';

@Component({
  selector: 'app-commics',
  templateUrl: './commics.component.html',
  styleUrl: './commics.component.css'
})
export class CommicsComponent  implements OnInit{

  commic: Commic[] = [];
  commicd: Commic = new Commic();
   constructor(private api:CommicService,private router:Router,public dialog: MatDialog,private routea: ActivatedRoute) {}

   ngOnInit(): void {
     this.obtenerCommics();
   }


  private obtenerCommics(){
    this.api.getCommicList().subscribe(dato=>{
      console.log(dato);
     this.commic = dato;
    })
  }

  openEditProForm(id: number) {
    if (!id) {
      console.error("Error: ID es undefined o null");
      return;
    }
    this.router.navigate(['detallecom', id]);
  }

}
