import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface Transferencia {
  serviceId: string;
  accountId: string;
  startDate: string;
  endDate: string;
  totalAmount:string;
  description: string;
  status:string;
}


@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent  implements OnInit {
  
  listForm: FormGroup;
  services:any;
  accounts:any;
  payments:any;
  movimientos:any;
  empresa:any;
  transferencias:any;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder,private cobroService:CobroService, private companyService:CompanyService, private router: Router) {

    this.listForm = this.fb.group({
      serviceId: ['', Validators.required],
      accountId:  ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    const empresa2 = localStorage.getItem('empresa');

    if (empresa2) {
      this.empresa = JSON.parse(empresa2);
    } else {
      this.empresa = null;
    }
  }



  exportAllToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.transferencias.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Recaudos');
    XLSX.writeFile(wb, 'recaudos.xlsx');
  }

  exportAllToPDF() {
    const doc = new jsPDF();
    const col = ['Servicio', 'Cuenta', 'Fecha de inicio','Fecha de fin',  'Monto', 'Descripcion', 'Estado'];
    const rows: any[] = [];

    this.transferencias.data.forEach((transferencia:any) => {
      const temp = [
        transferencia.serviceId,
        transferencia.accountId,
        transferencia.startDate,
        transferencia.endDate,
        transferencia.totalAmount,
        transferencia.description,
        transferencia.status
      ];
      rows.push(temp);
    });

    (doc as any).autoTable({
      head: [col],
      body: rows
    });
    doc.save('recaudos.pdf');
  }




  ngOnInit():void{
    // this.companyService.getServices().subscribe(
    //   response => {
    //     console.log('Se obtieron servicios disponibles', response);
    //     this.services=response
    //   },
    //   error => {
    //     console.error('No se obtuvieron servicios', error);
       
    //   }
    // );

    this.companyService.getAccounts(this.empresa.uniqueId).subscribe(
      response => {
        console.log('Se obtieron cuentas de la empresa', response);
        this.accounts=response
      },
      error => {
        console.error('No se obtuvieron cuentas de la empresa', error);
       
      }
    );

    this.cobroService.paymentByCuenta(3).subscribe(
      response => {
        console.log('Se obtieron los pagos hacia la cuenta', response);
        this.payments=response
      },
      error => {
        console.error('No se obtieron los pagos hacia la cuenta', error);
       
      }
    );
  }

  onSubmit() {

    let serviceId=this.listForm.value.serviceId
    let accountId=this.listForm.value.accountId
    let startDate=this.listForm.value.startDate
    let endDate=this.listForm.value.endDate

    this.cobroService.getOrderByServiceAndDate(serviceId,accountId, startDate, endDate).subscribe(
      response => {
        console.log('Se obtieron ordenes', response);
        this.movimientos=response;
        this.transferencias = new MatTableDataSource<Transferencia>([]);

        this.movimientos.forEach((movimiento:any)=>{
          this.transferencias.data.push({ ...movimiento });

        })
        this.transferencias._updateChangeSubscription(); // Refresh the table
  
        // Mostrar mensaje de confirmación
        this.snackBar.open('Recaudo procesado exitosamente', 'Cerrar', {
          duration: 3000, // Duración del snackbar en milisegundos
          verticalPosition: 'top', // Posición vertical
          horizontalPosition: 'center' // Posición horizontal
        });

      },
      error => {
        console.error('No se obtuvieron ordenes', error);
       
      }
    );
  }



  obtainItems(servicio:any, ordenId:any){
    this.router.navigate(['/ui-components/items', servicio, ordenId]);
  }


  cambioEstado(uniqueId:any, estado:any){
    this.cobroService.cambioEstadoOrder(uniqueId, estado).subscribe(
      response => {
        console.log('Se cambio de estado a activo', response);
      },
      error => {
        console.error('No se se cambio de estado', error);
      }
    );
  }

}
