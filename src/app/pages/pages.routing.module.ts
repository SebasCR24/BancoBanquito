import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BadgeComponent } from './ui-components/badge/badge.component';
import { ChipsComponent } from './ui-components/chips/chips.component';
import { AppListsComponent } from './ui-components/lists/lists.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'pagos',
    component: BadgeComponent,
    data: {
      title: 'Pagos',
    },
  },
  {
    path: 'transferencias',
    component: ChipsComponent,
    data: {
      title: 'Transferencias',
    },
  },
  {
    path: 'estado-de-cuenta',
    component: AppListsComponent,
    data: {
      title: 'Estado de Cuenta',
    },
  },
];
