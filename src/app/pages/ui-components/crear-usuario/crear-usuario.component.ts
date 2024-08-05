import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Lógica para enviar los datos del formulario y crear un nuevo usuario
    console.log("Formulario enviado");
  }

}
