import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    // Aquí puedes añadir la lógica para cerrar la sesión, por ejemplo, eliminar el token de autenticación
    console.log('Cerrar Sesión');
    localStorage.removeItem('usuario');
    localStorage.removeItem('empresa');

    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
