import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'POSICIÓN CONSOLIDADA',
    iconName: 'list',
    route: '/ui-components/movimientos',
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
    displayName: 'REPORTES',
    iconName: 'file',
    route: '/ui-components/chips',
  },
];
