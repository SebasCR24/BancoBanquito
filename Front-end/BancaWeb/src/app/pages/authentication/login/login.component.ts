import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según tu estructura
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';


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
  response:any;
  empresa:any;
  passwordFieldType: string = 'password'; // Definimos la propiedad aquí

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private companyService:CompanyService) { 
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password:  ['', Validators.required]
    });
  }

  login(): void {
    this.authService.login2(this.loginForm.value).subscribe(
      response => {
        
        this.errorMessage = '';
        this.response=response


        if(response){
          
          this.companyService.getCompanyById(this.response.companyId).subscribe(
            response => {
              console.log('Empresa encontrada', response);
              localStorage.setItem('empresa', JSON.stringify(response));

            },
            error => {      
              console.error('Empresa no encontrada.', error);
            }
          );
        }
        this.errorMessage = '';
        localStorage.setItem('usuario', JSON.stringify(response));
        this.router.navigate(['/dashboard']);
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
