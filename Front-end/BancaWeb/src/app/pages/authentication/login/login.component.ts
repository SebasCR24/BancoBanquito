import { Component } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  passwordFieldType: string = 'password';

  constructor(private authService: AuthService) {}

  login() {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Invalid credentials';
    }
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
