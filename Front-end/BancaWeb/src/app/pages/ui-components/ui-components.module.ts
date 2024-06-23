import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// UI Components
import { BadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';

@NgModule({
  declarations: [
    BadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UiComponentsRoutes),
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    TablerIconsModule.pick(TablerIcons),
  ]
})
export class UicomponentsModule { }
