import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según tu estructura
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordFieldType: string = 'password'; // Definimos la propiedad aquí

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password:  ['', Validators.required]
    });
  }

  login(): void {
    this.authService.login2(this.loginForm.value).subscribe(
      response => {
        console.log('Usuario encontrado', response);
        //guardar en local storage la respuesta y redirigir a la pagina de inicio
      },
      error => {
        this.errorMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';

        console.error('Usuario o clave incorrectos', error);
       
      }
    );

    // if (this.authService.login(this.username, this.password)) {
    //   this.errorMessage = '';
    // } else {
    //   this.errorMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
    // }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordFieldType(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
