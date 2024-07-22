import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent {
  nombreAdmin: string = '';
  correoAdmin: string = '';
  claveAleatoria: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  generateRandomPassword(): string {
    return Math.random().toString(36).slice(-8);
  }

  registerAdmin(): void {
    if (this.nombreAdmin && this.correoAdmin) {
      this.claveAleatoria = this.generateRandomPassword();
      // Simular el envío del correo electrónico
      console.log(`Enviando clave aleatoria: ${this.claveAleatoria} al correo: ${this.correoAdmin}`);
      // Lógica para registrar la empresa y el usuario administrador
      this.authService.registerAdmin(this.correoAdmin, this.claveAleatoria);
      this.successMessage = 'Registro exitoso. Se ha enviado una clave temporal al correo electrónico del administrador.';
      this.errorMessage = '';

      // Mostrar el mensaje de éxito y luego redirigir al dashboard
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 6000); // 6 segundos de retraso para permitir que el mensaje de éxito se muestre
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }
}
