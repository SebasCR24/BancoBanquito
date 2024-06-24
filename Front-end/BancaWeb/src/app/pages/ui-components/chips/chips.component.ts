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
      cuentaOrigen: '1234-5678-9012-3456',
      cuentaDestino: '6543-2109-8765-4321',
      nombreTitular: 'Juan Perez',
      monto: 1000,
      detalle: 'Pago de servicios'
    },
    {
      cuentaOrigen: '6543-2109-8765-4321',
      cuentaDestino: '1234-5678-9012-3456',
      nombreTitular: 'Maria Gomez',
      monto: 500,
      detalle: 'Transferencia personal'
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
