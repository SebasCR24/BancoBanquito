import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // Data for the example
  movimientos = [
    {
      date: 'Sunday, June 23, 2024',
      transactions: [
        {
          description: 'Transferencia Directa a Vilaña Sanchez Vanessa Alejandra',
          amount: -7.00,
          type: 'debit'
        },
        {
          description: 'Transferencia Directa de Loyaga Rosero Byron Alexis',
          amount: 7.00,
          type: 'credit'
        },
        {
          description: '05099112--reg Reclamos--t3--039231803',
          amount: 1.00,
          type: 'credit'
        }
      ]
    },
    {
      date: 'Wednesday, June 12, 2024',
      transactions: [
        {
          description: 'Transferencia Directa a Garate Altamirano Edgar Danilo',
          amount: -2.00,
          type: 'debit'
        }
      ]
    }
  ];
}
