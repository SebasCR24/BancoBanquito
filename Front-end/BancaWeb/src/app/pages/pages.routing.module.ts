import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Asegúrate de importar correctamente

export const PagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent, // Usa el componente aquí
    data: {
      title: 'Starter Page',
    },
  },
];
