import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  empresa:any;
  usuario:any;


  constructor(){
    const empresa2 = localStorage.getItem('empresa');
    const usuario2 = localStorage.getItem('usuario');

    if (usuario2) {
      this.usuario = JSON.parse(usuario2);
    } else {
      this.usuario = null;
    }

    if (empresa2) {
      this.empresa = JSON.parse(empresa2);
    } else {
      this.empresa = null;
    }
  }

}
