import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Payment {
  empresa: string;
  servicio: string;
  fecha: string;
  monto: number;
  estado: string;
  contrapartida: string;
  cuentaBancaria: string;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  payment: Payment = {
    empresa: '',
    servicio: '',
    fecha: '',
    monto: 0,
    estado: 'Pendiente',
    contrapartida: '',
    cuentaBancaria: ''
  };

  pagos = new MatTableDataSource<Payment>([
    {
      empresa: 'ElectroAndes',
      servicio: 'Recaudo',
      fecha: '2024-01-15',
      monto: 1200,
      estado: 'Pagado',
      contrapartida: '123456',
      cuentaBancaria: '1234-5678-9012-3456'
    },
    {
      empresa: 'Distribuidora Oriente',
      servicio: 'Débito Automático',
      fecha: '2024-02-10',
      monto: 850,
      estado: 'Pendiente',
      contrapartida: '789012',
      cuentaBancaria: '6543-2109-8765-4321'
    },
    {
      empresa: 'Inmobiliaria del Pacífico',
      servicio: 'Recaudo',
      fecha: '2024-03-05',
      monto: 500,
      estado: 'Pagado',
      contrapartida: '345678',
      cuentaBancaria: '5678-9012-3456-7890'
    }
  ]);

  displayedColumns: string[] = ['empresa', 'servicio', 'contrapartida', 'fecha', 'monto', 'estado'];

  onSubmit() {
    this.pagos.data.push({ ...this.payment, estado: 'Pagado' });
    this.pagos._updateChangeSubscription(); // Refresh the table
    this.payment = {
      empresa: '',
      servicio: '',
      fecha: '',
      monto: 0,
      estado: 'Pendiente',
      contrapartida: '',
      cuentaBancaria: ''
    };
  }
}
