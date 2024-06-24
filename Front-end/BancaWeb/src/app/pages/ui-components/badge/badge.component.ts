import { Component, OnInit } from '@angular/core';

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
export class BadgeComponent implements OnInit {
  payment: Payment = {
    empresa: '',
    servicio: '',
    fecha: '',
    monto: 0,
    estado: 'Pendiente',
    contrapartida: '',
    cuentaBancaria: ''
  };

  pagos: Payment[] = [
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
  ];

  ngOnInit() {
    this.payment.fecha = new Date().toISOString().split('T')[0]; // Set the date to the current date
  }

  onSubmit() {
    this.pagos.push({ ...this.payment, estado: 'Pagado' });
    this.payment = {
      empresa: '',
      servicio: '',
      fecha: new Date().toISOString().split('T')[0], // Reset to current date
      monto: 0,
      estado: 'Pendiente',
      contrapartida: '',
      cuentaBancaria: ''
    };
  }
}
