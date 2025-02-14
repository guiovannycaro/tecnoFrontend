import { Component, Inject,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Preferencias } from '../../modelos/preferencias';
import { PreferidosService } from '../../services/preferidos.service';
import { PersonaService } from '../../services/persona.service';
import { Respuesta } from '../../modelos/respuesta';
@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent  implements OnInit{

    preferencia: Preferencias[] = [];
    preferenciad: Preferencias = new Preferencias();
    usuario: string  = '';
     id: string  = '';
     idgen : string  = '';
     idPersona: string  = '';
     respuesta:Respuesta  = new Respuesta();
  constructor(
    private _fb:FormBuilder,
    private apiper:PersonaService,
    private api:PreferidosService,private router:Router,private routea: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.usuario = sessionStorage.getItem('username') || '';



      this.routea.paramMap.subscribe(params => {
        this.id = params.get('id')  || ''; // Recupera 'id' de la URL
       this.idgen = params.get('idgen')  || '';

      });


      this.obtenerIdPersona(this.usuario);


    }

   private  obtenerIdPersona(usuario: string): void {
      this.apiper.getIdPerUsuario(usuario).subscribe({
        next: (idPersona) => {
          this.idPersona = idPersona;
          this.actualisarpreferencias(this.id, this.idgen, this.idPersona);
        },
        error: (err) => {
          console.error('Error al obtener el ID de la persona:', err);
        }
      });
    }

    private actualisarpreferencias(idcomic: string, idgenero: string, idpersona: string): void {
      console.log(`Actualizando preferencias con: Comic: ${idcomic}, Género: ${idgenero}, Persona: ${idpersona}`);
      // Aquí iría la lógica para actualizar preferencias
     this.api.crearPreferencias(idcomic,idgenero,idpersona).subscribe({
      next: (dato) => {
        this.respuesta = dato;
        console.log(JSON.stringify(this.respuesta, null, 2));

        Swal.fire({
          title: `codigo : ${this.respuesta.codigo}`,
          text: `${this.respuesta.descripcion}`,
          icon: this.respuesta.mensaje as "success" | "error" | "warning" | "info"
        }).then(() => {
          this.router.navigate(['dashboard/commics/']);
        });
      },
      error: (err) => {
        console.error('Error al obtener el ID de la persona:', err);
        alert(' Preferencia ya existe ');
      }
    });
    }


}
