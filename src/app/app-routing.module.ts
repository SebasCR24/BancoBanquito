import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegistroComponent } from './pages/authentication/register/registro.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './pages/authentication/verify-code/verify-code.component';
import { AdminRegisterComponent } from './pages/authentication/admin-register/admin-register.component';
import { VerifyPasswordComponent } from './pages/authentication/verify-password/verify-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { FirstLoginGuard } from './first-login.guard';
import { PositionConsolidatedComponent } from './pages/position-consolidated/position-consolidated.component'; // Importa el nuevo componente

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'admin-register', component: AdminRegisterComponent },
  { path: 'verify-password', component: VerifyPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-code', component: VerifyCodeComponent },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'position-consolidated',
        component: PositionConsolidatedComponent,
        canActivate: [AuthGuard],
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
