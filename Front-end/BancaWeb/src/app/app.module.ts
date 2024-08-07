import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// Import all material modules
import { MaterialModule } from './material.module';

// Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';

// Import Authentication Components
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegistroComponent } from './pages/authentication/register/registro.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './pages/authentication/verify-code/verify-code.component';
import { AdminRegisterComponent } from './pages/authentication/admin-register/admin-register.component';
import { VerifyPasswordComponent } from './pages/authentication/verify-password/verify-password.component';

// Import UI Components
import { CrearUsuarioComponent } from './pages/ui-components/crear-usuario/crear-usuario.component';
import { ModificarUsuarioComponent } from './pages/ui-components/modificar-usuario/modificar-usuario.component';
import { NotificationBellComponent } from './pages/ui-components/notification-bell/notification-bell.component';
import { PositionConsolidatedComponent } from './pages/position-consolidated/position-consolidated.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    LoginComponent,
    RegistroComponent,
    ForgotPasswordComponent,
    VerifyCodeComponent,
    AdminRegisterComponent,
    VerifyPasswordComponent,
    CrearUsuarioComponent,
    ModificarUsuarioComponent,
    NotificationBellComponent,
    PositionConsolidatedComponent, // Añadir PositionConsolidatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatDialogModule,
    CommonModule,
    MatSnackBarModule 
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
