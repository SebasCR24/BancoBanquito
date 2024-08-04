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
    displayName: 'CARGA DE ÓRDENES',
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
