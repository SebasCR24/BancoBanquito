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

    if (this.ruc && this.cuentaBancaria) {
      // Lógica para registrar la empresa y el usuario
      console.log('Registro de cuenta con RUC:', this.ruc);
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
    const termsAndConditions = `
      Términos y Condiciones
      Al registrarse en esta aplicación bancaria, usted acepta los siguientes términos y condiciones:
      1. Aceptación de los Términos
        Al acceder y utilizar esta aplicación, usted acepta cumplir y estar sujeto a estos términos y condiciones.
      2. Responsabilidad del Usuario
        Usted es responsable de mantener la confidencialidad de su cuenta y contraseña, así como de todas las actividades que ocurran bajo su cuenta.
      3. Privacidad
        Nos comprometemos a proteger su privacidad. Toda la información personal que nos proporcione será utilizada de acuerdo con nuestra política de privacidad.
      4. Seguridad
        Implementamos medidas de seguridad para proteger su información contra accesos no autorizados.
      5. Modificaciones de los Términos
        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación.
      6. Contacto
        Si tiene alguna pregunta sobre estos términos y condiciones, por favor contáctenos a través de nuestro servicio de atención al cliente.
    `;
    alert(termsAndConditions);
  }
}
