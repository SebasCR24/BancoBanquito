import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import { Router } from '@angular/router';
import { NavItem } from './nav-item/nav-item';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems = navItems;
  filteredNavItems: NavItem[] = [];
  usuario:any;

  constructor(public navService: NavService, private router: Router) {}

  ngOnInit(): void {
    this.filterNavItems()
  }

  logout() {
    console.log('Cerrar Sesión');
    localStorage.removeItem('usuario');
    localStorage.removeItem('empresa');

    this.router.navigate(['/login']);
  }

  filterNavItems() {
    const usuario2 = localStorage.getItem('usuario');
  
    if (usuario2) {
      this.usuario = JSON.parse(usuario2);
      const userRole = this.usuario.role;
  
      if (userRole) {
        this.filteredNavItems = this.navItems.filter(item => {
          if (item.showIf) {
            if (Array.isArray(item.showIf)) {
              return item.showIf.includes(userRole);
            } else {
              return item.showIf === userRole;
            }
          }
          return true; 
        });
      } else {
        this.filteredNavItems = this.navItems; 
      }
    } else {
      this.usuario = null;
      this.filteredNavItems = this.navItems; 
    }
  }
  

}
