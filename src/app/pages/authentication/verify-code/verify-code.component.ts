import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {
  code: string = '';
  errorMessage: string = '';

  constructor(private router: Router) { }

  verifyCode(): void {
    if (this.code) {
      // Aquí implementas la lógica para verificar el código
      console.log('Verificación del código:', this.code);
      // Si la verificación es exitosa, redirigir al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Por favor, ingrese el código';
    }
  }
}
