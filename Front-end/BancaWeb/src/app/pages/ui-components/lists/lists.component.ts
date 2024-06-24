import { Component } from '@angular/core';

export interface Movimiento {
  idMovimiento: number;
  idCuenta: number;
  tipoMovimiento: string;
  monto: number;
  fecha: string;
  descripcion: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class AppListsComponent {
  movimientos: Movimiento[] = [
    {
      idMovimiento: 1,
      idCuenta: 1001,
      tipoMovimiento: 'Depósito',
      monto: 1000.00,
      fecha: '2024-06-01',
      descripcion: 'Depósito en efectivo'
    },
    {
      idMovimiento: 2,
      idCuenta: 1002,
      tipoMovimiento: 'Retiro',
      monto: 200.00,
      fecha: '2024-06-02',
      descripcion: 'Retiro en cajero automático'
    },
    {
      idMovimiento: 3,
      idCuenta: 1003,
      tipoMovimiento: 'Transferencia',
      monto: 500.00,
      fecha: '2024-06-03',
      descripcion: 'Transferencia a cuenta externa'
    }
  ];
}
