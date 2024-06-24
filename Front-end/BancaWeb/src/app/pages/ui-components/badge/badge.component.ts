import { Component } from '@angular/core';

interface Payment {
  empresa: string;
  servicio: string;
  fecha: string;
  monto: number;
  estado: string;
  comprobante: string;
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
    comprobante: '',
    cuentaBancaria: ''
  };

  pagos: Payment[] = [
    {
      empresa: 'ElectroAndes',
      servicio: 'Transferencia',
      fecha: '2024-01-15',
      monto: 1200,
      estado: 'Pagado',
      comprobante: '123456',
      cuentaBancaria: '1234-5678-9012-3456'
    },
    {
      empresa: 'Distribuidora Oriente',
      servicio: 'Débito',
      fecha: '2024-02-10',
      monto: 850,
      estado: 'Pendiente',
      comprobante: '789012',
      cuentaBancaria: '6543-2109-8765-4321'
    },
    {
      empresa: 'Inmobiliaria del Pacífico',
      servicio: 'Transferencia',
      fecha: '2024-03-05',
      monto: 500,
      estado: 'Pagado',
      comprobante: '345678',
      cuentaBancaria: '5678-9012-3456-7890'
    }
  ];

  onSubmit() {
    this.pagos.push({ ...this.payment, estado: 'Pagado' });
    this.payment = {
      empresa: '',
      servicio: '',
      fecha: '',
      monto: 0,
      estado: 'Pendiente',
      comprobante: '',
      cuentaBancaria: ''
    };
  }
}
