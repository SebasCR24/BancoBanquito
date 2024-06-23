import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor() { }

  transferirDinero() {
    // Lógica para transferir dinero
    console.log('Transferir dinero');
  }

  realizarPagos() {
    // Lógica para realizar pagos
    console.log('Realizar Pagos');
  }

  estadosDeCuenta() {
    // Lógica para estados de cuenta
    console.log('Estados de cuenta');
  }
}
