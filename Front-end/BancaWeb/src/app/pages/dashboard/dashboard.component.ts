import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  transactionGroups = [
    {
      date: new Date('2024-06-24'),
      transactions: [
        { description: 'Transferencia Directa a Vilaña Sanchez Vanessa Alejandra', amount: -7, balance: 1.18 },
        { description: 'Transferencia Directa de Loyaga Rosero Byron Alexis', amount: 7, balance: 8.18 },
        { description: '05099112-reg Reclamos-t3-039231803', amount: 1, balance: 1.18 }
      ]
    },
    {
      date: new Date('2024-06-13'),
      transactions: [
        { description: 'Transferencia Directa a Garate Altamirano Edgar Danilo', amount: -2, balance: 0.18 },
        { description: 'Transferencia Directa a Egas Rodriguez Maria Jose', amount: -0.5, balance: 0.18 }
      ]
    }
  ];

  filteredTransactionGroups = [...this.transactionGroups];

  filterByDates(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (!start || !end) {
      this.filteredTransactionGroups = [...this.transactionGroups];
      return;
    }

    this.filteredTransactionGroups = this.transactionGroups.filter(group =>
      group.date >= start && group.date <= end
    );
  }
}
