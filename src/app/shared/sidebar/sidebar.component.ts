import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  public estado: number | undefined; // Estado del usuario
  public nombre: string | undefined; // Nombre del usuario
  public rol: boolean = false; // Inicializar el rol por defecto
  public menuItems: any[] = [];
  public secciontems: any[] = [];
  constructor() {}

  ngOnInit() {

    this.menuItems = [
      {
        titulo: ' Gestion ',
        icono: 'nav-icon fas fa-tachometer-alt',
        routerLink: '/dashboard',
        submenu: [
          { titulo: ' Usuarios ', icono: 'fa fa-users', routerLink: '/dashboard/usuarios' },
          { titulo: ' Roles ', icono: 'fa fa-user', routerLink: '/dashboard/roles' }
        ]
      }
    ];

    this.secciontems = [
      {
        titulo: ' Categorias ',
        icono: ' fa fa-server ',
        routerLink: '/frontend',
        submenu: [
          { titulo: ' Commics ', icono: 'fa fa-rocket', routerLink: '/dashboard/commic' },
          { titulo: ' Preferidos ', icono: 'fa fa-university', routerLink: '/dashboard/preferencias' }
        ]
      }
    ];

  }

  logout() {
    location.href = 'login'; // Redirige al login
  }
}
