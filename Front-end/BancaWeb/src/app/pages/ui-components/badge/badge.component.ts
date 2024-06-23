import { Component } from '@angular/core';

interface Payment {
  empresa: string;
  servicio: string;
  fecha: string;
  monto: number;
  estado: string;
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
    estado: 'Pendiente'
  };

  pagos: Payment[] = [
    {
      empresa: 'ElectroAndes',
      servicio: 'Recaudo',
      fecha: '2024-01-15',
      monto: 1200,
      estado: 'Pagado'
    },
    {
      empresa: 'Distribuidora Oriente',
      servicio: 'Débito Automático',
      fecha: '2024-02-10',
      monto: 850,
      estado: 'Pendiente'
    },
    {
      empresa: 'Inmobiliaria del Pacífico',
      servicio: 'Recaudo',
      fecha: '2024-03-05',
      monto: 500,
      estado: 'Pagado'
    }
  ];

  onSubmit() {
    this.pagos.push({ ...this.payment, estado: 'Pagado' });
    this.payment = {
      empresa: '',
      servicio: '',
      fecha: '',
      monto: 0,
      estado: 'Pendiente'
    };
  }
}
