import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  ruc: string = '';
  cuentaBancaria: string = '';
  documento: string = '';
  nombreAdmin: string = '';
  correoAdmin: string = '';
  termsAccepted: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) { }

  validateAndRegister(): void {
    // Validar el RUC y la cuenta bancaria (simulación)
    if (this.ruc === '1234567890' && this.cuentaBancaria === '9876543210') {
      this.errorMessage = 'La empresa ya está registrada.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Debe aceptar los Términos y Condiciones para continuar.';
      return;
    }

    if (this.ruc && this.cuentaBancaria && this.documento && this.nombreAdmin && this.correoAdmin) {
      // Lógica para registrar la empresa y el usuario
      console.log('Registro de cuenta con RUC:', this.ruc, 'y Documento:', this.documento);
      this.successMessage = 'Registro exitoso. Se ha enviado una clave temporal al correo electrónico del administrador.';
      this.errorMessage = '';

      // Simulación de envío de clave aleatoria
      const claveAleatoria = Math.random().toString(36).slice(-8);
      console.log('Clave aleatoria generada:', claveAleatoria);

      // Redirigir al dashboard después del registro
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 2000);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  showTerms(): void {
    alert('Términos y Condiciones: Aquí se describen los términos y condiciones...');
  }
}
