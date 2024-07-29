import { registerables } from 'chart.js';
import { CompanyService } from './../../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {
  ruc: string = '';
  cuentaBancaria: string = '';
  termsAccepted: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  termsModal: any;

  loginForm!: FormGroup;
  submitted = false;
  username: string = '';
  password: string = '';
  companyService:any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private company:CompanyService
  ) {
    this.companyService = company;
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      ruc: ['', Validators.required],
      cuentaBancaria: ['', Validators.required],
    });
  }


  validateAndRegister(): void {

    if (this.ruc === '1234567890' && this.cuentaBancaria === '9876543210') {
      this.errorMessage = 'La empresa ya está registrada.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Debe aceptar los Términos y Condiciones para continuar.';
      return;
    }

    if (this.ruc && this.cuentaBancaria) {
      this.companyService.registerCompany(this.ruc,this.cuentaBancaria).subscribe(
        (res:any) => {
          if (res.status === 'success') {
            console.log('se registro nueva compania');
            this.router.navigate(['/admin-register']);
          } else {
            console.error('error al registrar compania');
          }
        },
        (error:any) => {
          console.error('Error al cargar cobros:', error);
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos.';
    }
  }

  openTermsAndConditions(event: Event): void {
    event.preventDefault(); // Prevenir la redirección por defecto
    this.termsModal = new bootstrap.Modal(document.getElementById('termsModal'), {});
    this.termsModal.show();
  }

  closeTermsAndConditions(): void {
    if (this.termsModal) {
      this.termsModal.hide();
    }
  }
}
