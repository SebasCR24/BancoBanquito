import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'DASHBOARD',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'MENU',
  },
  {
    displayName: 'POSICIÓN CONSOLIDADA',
    iconName: 'chart-pie',
    route: '/position-consolidated',
  },
  {
    displayName: 'PAGOS',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'TRANSFERENCIAS',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'ESTADO DE CUENTA',
    iconName: 'list',
    route: '/ui-components/lists',
  },
];
