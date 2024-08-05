import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import 'jspdf-autotable';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  cobroForm: FormGroup;
  fileLoaded: boolean = false;
  selectedFile: File | null = null;
  accounts:any;
  empresa:any;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private cobroService:CobroService, private companyService:CompanyService) {
    this.cobroForm = this.fb.group({
      uniqueId: [''],
      serviceId: [''],
      accountId:  [''],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      totalAmount: [''],
      description: [''],
      status: [''],
      companyUid: [''],
    });

    const empresa2 = localStorage.getItem('empresa');
    if (empresa2) {
      this.empresa = JSON.parse(empresa2);
    } else {
      this.empresa = null;
    }
  }

  ngOnInit(): void {
    this.companyService.getAccounts(this.empresa.uniqueId).subscribe(
      response => {
        console.log('Se obtieron cuentas de la empresa', response);
        this.accounts=response
      },
      error => {
        console.error('No se obtuvieron cuentas de la empresa', error);
      }
    );    
  }

  onSubmit() {
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }


  uploadFile() {
    if (this.selectedFile) {
      this.cobroForm.value.companyUid=this.empresa.uniqueId

      //si es un recaudo llamr al servicio de ingresar recaudos

      if(this.cobroForm.value.serviceId=='LEY0053994'){
        this.cobroService.crearOrderRecaudo(this.selectedFile, this.cobroForm.value).subscribe(
          response => {
            console.log('Archivo y datos subidos con éxito', response);
            this.snackBar.open('Orden cargada de manera exitosa', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error => {
            console.error('Error al subir el archivo y los datos', error);
            this.snackBar.open('Error al cargar orden', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }
        );
      }else{
        this.cobroService.crearOrderCobroAutomatico(this.selectedFile, this.cobroForm.value).subscribe(
          response => {
            console.log('Archivo y datos subidos con éxito', response);
            this.snackBar.open('Orden cargada de manera exitosa', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          error => {
            console.error('Error al subir el archivo y los datos', error);
            this.snackBar.open('Error al cargar orden', 'Cerrar', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }
        );
      }

      
    }
  }


  cancelFile(fileInput: HTMLInputElement) {
    this.fileLoaded = false;
    fileInput.value = ''; 
  }

}
