import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Inicio',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'MENU',
  },
  {
    displayName: 'COBROS Y RECAUDOS',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'COMISIONES',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'POSICION CONSOLIDADA',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    displayName: 'GESTION DE USUARIOS',
    iconName: 'layout-navbar-expand',
    route: '/ui-components/menu',
  },
];
