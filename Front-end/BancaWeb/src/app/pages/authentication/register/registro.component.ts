import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  user = {
    name: '',
    email: '',
    password: '',
    dob: ''
  };

  constructor() { }

  onSubmit() {
    // Lógica para registrar al usuario
    console.log('Usuario registrado:', this.user);
  }
}
