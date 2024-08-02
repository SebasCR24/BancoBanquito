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
    displayName: 'COBROS / RECAUDOS',
    iconName: 'cash', 
    route: '/ui-components/badge',
  },
  {
    displayName: 'MOVIMIENTOS',
    iconName: 'list',
    route: '/ui-components/lists',
  },
];
