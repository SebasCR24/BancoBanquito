import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  ruc: string = '';
  documento: string = '';
  errorMessage: string = '';

  constructor() { }

  register(): void {
    // Lógica para el registro de la cuenta
    if (this.ruc && this.documento) {
      // Implementar la lógica para registrar la cuenta
      console.log('Registro de cuenta con RUC:', this.ruc, 'y Documento:', this.documento);
      this.errorMessage = ''; // Limpiar mensaje de error si lo hay
    } else {
      this.errorMessage = 'Por favor, ingrese todos los campos';
    }
  }
}
