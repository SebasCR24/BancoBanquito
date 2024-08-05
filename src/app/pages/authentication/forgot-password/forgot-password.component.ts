import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  username: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  requestCode(): void {
    if (this.username) {
      // Aquí implementas la lógica para solicitar el código
      console.log('Solicitud de código para el usuario:', this.username);
      this.errorMessage = ''; // Limpiar mensaje de error si lo hay
      this.router.navigate(['/verify-code']); // Redirigir a la pantalla de verificación de código
    } else {
      this.errorMessage = 'Por favor, ingrese su nombre de usuario';
    }
  }
}
