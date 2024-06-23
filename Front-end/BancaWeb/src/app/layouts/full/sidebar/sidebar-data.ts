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
    displayName: 'POSICION CONSOLIDADA',
    iconName: 'list',
    route: '/ui-components/lists',
  },
];
