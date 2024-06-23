import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.scss']
})
export class ModificarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    // Lógica para enviar los datos del formulario y modificar el usuario
    console.log("Formulario enviado");
  }

}
