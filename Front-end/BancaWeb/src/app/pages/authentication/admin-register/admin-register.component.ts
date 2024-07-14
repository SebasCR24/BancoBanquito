import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  generateRandomPassword(): string {
    return Math.random().toString(36).slice(-8);
  }

  registerAdmin(): void {
    if (this.nombreAdmin && this.correoAdmin) {
      this.claveAleatoria = this.generateRandomPassword();
      // Simular el envío del correo electrónico
      console.log(`Enviando clave aleatoria: ${this.claveAleatoria} al correo: ${this.correoAdmin}`);
      // Lógica para registrar la empresa y el usuario administrador
      this.successMessage = 'Registro exitoso. Se ha enviado una clave temporal al correo electrónico del administrador.';
      this.errorMessage = '';
  
      // Redirigir a la pantalla de verificación de contraseña temporal
      setTimeout(() => {
        this.router.navigate(['/verify-password']);
      }, 2000);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }  
}
