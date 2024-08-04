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
    displayName: 'Carga de órdenes',
    iconName: 'cash', 
    route: '/ui-components/badge',
    showIf: 'ADM'
  },
  {
    displayName: 'MOVIMIENTOS',
    iconName: 'list',
    route: '/ui-components/movimientos',
  },
  {
    displayName: 'REPORTES',
    iconName: 'file',
    route: '/ui-components/chips',
  },
];
