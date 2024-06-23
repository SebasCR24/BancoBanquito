import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  user = {
    email: ''
  };

  constructor() { }

  onSubmit() {
    // Lógica para enviar el enlace de restablecimiento de contraseña
    console.log('Enlace de restablecimiento enviado a:', this.user.email);
  }
}
