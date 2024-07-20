import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service'; // Ruta corregida

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.scss']
})
export class VerifyPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  createNewPassword(): void {
    if (this.newPassword === this.confirmPassword) {
      this.authService.completeFirstLogin(this.newPassword);
      this.successMessage = 'Contraseña creada exitosamente.';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/dashboard']); // Redirección al dashboard
      }, 2000);
    } else {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = '';
    }
  }
}
