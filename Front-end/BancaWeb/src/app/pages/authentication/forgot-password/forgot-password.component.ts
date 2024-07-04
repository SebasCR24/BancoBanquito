import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  username: string = '';
  errorMessage: string = '';

  constructor() { }

  requestCode(): void {
    // Lógica para solicitar el código de recuperación de contraseña
    if (this.username) {
      // Implementar la lógica para enviar el código de recuperación
      console.log('Solicitud de código para el usuario:', this.username);
      this.errorMessage = ''; // Limpiar mensaje de error si lo hay
    } else {
      this.errorMessage = 'Por favor, ingrese su nombre de usuario';
    }
  }
}
