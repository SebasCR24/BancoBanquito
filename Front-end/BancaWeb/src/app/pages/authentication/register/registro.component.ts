import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TermsAndConditionsComponent } from '../terms-and-conditions/terms-and-conditions.component';

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

  constructor(private router: Router, public dialog: MatDialog) { }

  validateAndRegister(): void {
    if (this.ruc === '1234567890' && this.cuentaBancaria === '9876543210') {
      this.errorMessage = 'La empresa ya está registrada.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Debe aceptar los Términos y Condiciones para continuar.';
      return;
    }

    if (this.ruc && this.cuentaBancaria) {
      // Redirigir a la pantalla de registro de usuario administrador
      this.router.navigate(['/admin-register']);
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  openTermsAndConditions(): void {
    this.dialog.open(TermsAndConditionsComponent, {
      width: '500px'
    });
  }
}
