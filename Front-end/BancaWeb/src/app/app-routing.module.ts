import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegistroComponent } from './pages/authentication/register/registro.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './pages/authentication/verify-code/verify-code.component';
import { AdminRegisterComponent } from './pages/authentication/admin-register/admin-register.component';
import { VerifyPasswordComponent } from './pages/authentication/verify-password/verify-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Asegúrate de importar DashboardComponent
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'verify-password', component: VerifyPasswordComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-code', component: VerifyCodeComponent },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent, // Asegúrate de que esta ruta esté configurada
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
