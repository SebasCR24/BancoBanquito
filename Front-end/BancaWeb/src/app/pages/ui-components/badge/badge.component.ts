import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { MatTableDataSource } from '@angular/material/table';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';

interface Cobro {
  uniqueId: string;
  serviceId: string;
  accountId: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
  description: string;
  status: string;
}

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  cobroForm: FormGroup;
  cobros = new MatTableDataSource<Cobro>([]);
  fileLoaded: boolean = false;
  selectedFile: File | null = null;
  accounts:any;
  services:any;


  displayedColumns: string[] = [
  'uniqueId',
  'serviceId',
  'accountId',
  'startDate',
  'endDate',
  'totalAmount',
  'description',
  'status',
    ];

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
    });
  }

  ngOnInit(): void {
    this.companyService.getAccounts().subscribe(
      response => {
        console.log('Se obtieron cuentas de la empresa', response);
        this.accounts=response
      },
      error => {
        console.error('No se obtuvieron cuentas de la empresa', error);
       
      }
    );

    this.companyService.getServices().subscribe(
      response => {
        console.log('Se obtieron servicios disponibles', response);
        this.services=response
      },
      error => {
        console.error('No se obtuvieron servicios', error);
       
      }
    );
    
  }

  onSubmit() {}

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  generateRandomString(): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charsetLength = charset.length;
    
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * charsetLength);
      result += charset[randomIndex];
    }
    
    return result;
  }

  uploadFile() {
    if (this.selectedFile) {
      this.cobroForm.value.status='PEN'
      this.cobroForm.value.uniqueId='ORD'+this.generateRandomString()

      this.cobroService.crearOrder(this.selectedFile, this.cobroForm.value).subscribe(
        response => {
          console.log('Archivo y datos subidos con éxito', response);
          this.snackBar.open('Cobro realizado de manera exitosa', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        },
        error => {
          console.error('Error al subir el archivo y los datos', error);
          this.snackBar.open('Error al realizar el cobro', 'Cerrar', {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
      );
    }
  }


  cancelFile(fileInput: HTMLInputElement) {
    this.fileLoaded = false;
    this.cobros.data = [];
    fileInput.value = ''; 
  }


  exportAllToExcel() {
    const dataToExport = this.cobros.data.map(cobro => {
      return {
        'Id del cobro': cobro.uniqueId,
        'Id del servicio': cobro.serviceId,
        'Cuenta': cobro.accountId,
        'Fecha de inicio': cobro.startDate,
        'Fecha de fin': cobro.endDate,
        'Monto total': cobro.totalAmount,
        'Descripcion': cobro.description,
        'Estado': cobro.status
      };
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Cobros');
    XLSX.writeFile(wb, 'COBROS.xlsx');
  }

  exportAllToPDF() {
    const doc = new jsPDF();
    const col = ['Empresa', 'Referencia', 'Nombres del Cliente', 'Tipo de Identificación', 'Identificación', 'Cuenta del Cliente', 'Monto', 'Fecha de Inicio', 'Fecha de Vencimiento', 'Cuenta a Acreditar', 'Tipo', 'Frecuencia', 'Cancelado'];
    const rows: any[] = [];

    this.cobros.data.forEach(cobro => {
      const temp = [
        cobro.uniqueId,
        cobro.serviceId,
        cobro.accountId,
        cobro.startDate,
        cobro.endDate,
        cobro.totalAmount,
        cobro.description,
        cobro.status
      ];
      rows.push(temp);
    });

    (doc as any).autoTable({
      head: [col],
      body: rows
    });
    doc.save('COBROS.pdf');
  }
}
