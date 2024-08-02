import { Component, OnInit } from '@angular/core';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface Movimiento {
  idMovimiento: number;
  idCuenta: number;
  tipoMovimiento: string;
  monto: number;
  fecha: string;
  descripcion: string;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class AppListsComponent  implements OnInit {
  listForm: FormGroup;
  services:any;
  accounts:any;
  movimientos:any;


  constructor(private fb: FormBuilder,private cobroService:CobroService, private companyService:CompanyService){

    this.listForm = this.fb.group({
      serviceId: ['', Validators.required],
      accountId:  ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit():void{
    this.companyService.getServices().subscribe(
      response => {
        console.log('Se obtieron servicios disponibles', response);
        this.services=response
      },
      error => {
        console.error('No se obtuvieron servicios', error);
       
      }
    );

    this.companyService.getAccounts().subscribe(
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
    let serviceId=this.listForm.value.serviceId
    let accountId=this.listForm.value.accountId
    let startDate=this.listForm.value.startDate
    let endDate=this.listForm.value.endDate

    this.cobroService.getOrderByServiceAndDate(serviceId,accountId, startDate, endDate).subscribe(
      response => {
        console.log('Se obtieron ordenes', response);
        this.movimientos=response;
      },
      error => {
        console.error('No se obtuvieron ordenes', error);
       
      }
    );
  }
  
  // movimientos: Movimiento[] = [
  //   {
  //     idMovimiento: 1,
  //     idCuenta: 1001,
  //     tipoMovimiento: 'Depósito',
  //     monto: 1000.00,
  //     fecha: '2024-06-01',
  //     descripcion: 'Depósito en efectivo'
  //   },
  //   {
  //     idMovimiento: 2,
  //     idCuenta: 1002,
  //     tipoMovimiento: 'Efectivo',
  //     monto: 200.00,
  //     fecha: '2024-06-02',
  //     descripcion: 'Retiro en cajero automático'
  //   },
  //   {
  //     idMovimiento: 3,
  //     idCuenta: 1003,
  //     tipoMovimiento: 'Transferencia',
  //     monto: 500.00,
  //     fecha: '2024-06-03',
  //     descripcion: 'Transferencia a cuenta externa'
  //   }
  // ];
}
