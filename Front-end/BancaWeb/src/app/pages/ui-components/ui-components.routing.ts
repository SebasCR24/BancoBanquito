import { Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';  // Asegúrate de que este nombre sea correcto
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { ItemsComponent } from './items/items.component';

export const UiComponentsRoutes: Routes = [
  { path: 'badge', component: BadgeComponent },
  { path: 'chips', component: ChipsComponent },  // Asegúrate de que este nombre sea correcto
  { path: 'lists', component: AppListsComponent },
  { path: 'menu', component: AppMenuComponent },
  { path: 'tooltips', component: AppTooltipsComponent },
  { path: 'items/:servicio/:ordenId', component: ItemsComponent }
];
