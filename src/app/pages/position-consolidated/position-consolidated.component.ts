import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-position-consolidated',
  templateUrl: './position-consolidated.component.html',
  styleUrls: ['./position-consolidated.component.scss']
})
export class PositionConsolidatedComponent implements OnInit, AfterViewInit {
  balances: any[];

  constructor() {
    this.balances = [
      { type: 'Cuentas Corrientes', amount: 10000 },
      { type: 'Cuentas de Ahorro', amount: 5000 },
      { type: 'Inversiones', amount: 15000 },
      { type: 'Préstamos', amount: -7000 }
    ];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializePieChart();
    this.initializeLineChart();
  }

  initializePieChart(): void {
    const canvas = document.getElementById('balancePieChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'pie',
          data: {
            labels: this.balances.map(b => b.type),
            datasets: [{
              data: this.balances.map(b => b.amount),
              backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#EF5350']
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
        });
      }
    }
  }

  initializeLineChart(): void {
    const canvas = document.getElementById('balanceLineChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                label: 'Cuentas Corrientes',
                data: [10000, 11000, 10500, 12000, 11500, 13000],
                borderColor: '#42A5F5',
                fill: false
              },
              {
                label: 'Cuentas de Ahorro',
                data: [5000, 5200, 5100, 5300, 5250, 5400],
                borderColor: '#66BB6A',
                fill: false
              },
              {
                label: 'Inversiones',
                data: [15000, 15200, 15100, 15300, 15250, 15400],
                borderColor: '#FFA726',
                fill: false
              },
              {
                label: 'Préstamos',
                data: [-7000, -6900, -6950, -6800, -6850, -6700],
                borderColor: '#EF5350',
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              }
            }
          }
        });
      }
    }
  }
}
