import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según tu estructura
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/services/company.service';
import { of, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';


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


  // login(): void {
  //   this.authService.login2(this.loginForm.value).pipe(
  //     switchMap(response => {
  //       // Guardar el resultado del login en localStorage
  //       localStorage.setItem('usuario', JSON.stringify(response));
  
  //       this.response=response
  //       // Obtener la empresa solo si el login es exitoso
  //       if (response && this.response.companyId) {
  //         return forkJoin({
  //           loginResponse: of(response), // Emite el resultado del login
  //           companyResponse: this.companyService.getCompanyById(this.response.companyId)
  //         });
  //       } else {
  //         // Manejar el caso en que no se obtiene companyId
  //         return of({
  //           loginResponse: response,
  //           companyResponse: null
  //         });
  //       }
  //     })
  //   ).subscribe(
  //     ({ loginResponse, companyResponse }) => {
  //       // Guardar la empresa en localStorage solo si se obtiene
  //       if (companyResponse) {
  //         localStorage.setItem('empresa', JSON.stringify(companyResponse));
  //       }
  
  //       // Redirigir al dashboard después de almacenar en localStorage
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error => {
  //       this.errorMessage = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
  //       console.error('Usuario o clave incorrectos', error);
  //     }
  //   );
  // }

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
