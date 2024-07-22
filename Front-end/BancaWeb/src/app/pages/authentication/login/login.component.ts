import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordFieldType: string = 'password'; // Definimos la propiedad aquí

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordFieldType(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
