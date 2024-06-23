import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

// Import UI Components
import { CrearUsuarioComponent } from './pages/ui-components/crear-usuario/crear-usuario.component';
import { ModificarUsuarioComponent } from './pages/ui-components/modificar-usuario/modificar-usuario.component';
import { NotificationBellComponent } from './pages/ui-components/notification-bell/notification-bell.component';

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
    CrearUsuarioComponent,
    ModificarUsuarioComponent,
    NotificationBellComponent // Deja este componente aquí
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons)
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
