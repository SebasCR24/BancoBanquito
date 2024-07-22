import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service'; // Ajusta la ruta según tu estructura

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
      this.successMessage = 'Contraseña creada exitosamente. Redirigiendo al login...';
      this.errorMessage = '';
      // Redirigir al login después de mostrar el mensaje de éxito
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000); // 3 segundos de retraso para permitir que el mensaje de éxito se muestre
    } else {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = '';
    }
  }
}
