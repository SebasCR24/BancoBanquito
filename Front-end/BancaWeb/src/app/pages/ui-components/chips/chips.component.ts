import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Transferencia {
  cuentaOrigen: string;
  cuentaDestino: string;
  nombreTitular: string;
  monto: number;
  detalle: string;
}

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent {
  transferencia: Transferencia = {
    cuentaOrigen: '',
    cuentaDestino: '',
    nombreTitular: '',
    monto: 0,
    detalle: ''
  };

  transferencias = new MatTableDataSource<Transferencia>([
    {
      cuentaOrigen: '2205361970',
      cuentaDestino: '2208761234',
      nombreTitular: 'Juan Perez',
      monto: 1000,
      detalle: 'Préstamo familiar'
    },
    {
      cuentaOrigen: '0609861234',
      cuentaDestino: '2208762309',
      nombreTitular: 'Maria Gomez',
      monto: 500,
      detalle: 'Pago de servicios básicos'
    }
  ]);

  displayedColumns: string[] = ['cuentaOrigen', 'cuentaDestino', 'nombreTitular', 'monto', 'detalle'];

  onSubmit() {
    this.transferencias.data.push({ ...this.transferencia });
    this.transferencias._updateChangeSubscription(); // Refresh the table
    this.transferencia = {
      cuentaOrigen: '',
      cuentaDestino: '',
      nombreTitular: '',
      monto: 0,
      detalle: ''
    };
  }
}
