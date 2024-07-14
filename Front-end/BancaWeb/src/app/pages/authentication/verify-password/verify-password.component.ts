import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.scss']
})
export class VerifyPasswordComponent {
  tempPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  isTempPasswordValid: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  // La contraseña temporal quemada
  correctTempPassword: string = 'temporal123';

  constructor(private router: Router) { }

  verifyTempPassword(): void {
    if (this.tempPassword === this.correctTempPassword) {
      this.isTempPasswordValid = true;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'La contraseña temporal es incorrecta.';
      this.isTempPasswordValid = false;
    }
  }

  createNewPassword(): void {
    if (this.newPassword === this.confirmPassword) {
      this.successMessage = 'Contraseña creada exitosamente.';
      this.errorMessage = '';
      // Lógica para crear la nueva contraseña en el sistema
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    } else {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = '';
    }
  }
}
