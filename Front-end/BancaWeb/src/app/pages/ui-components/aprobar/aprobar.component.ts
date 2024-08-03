import { Component, OnInit } from '@angular/core';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  payments:any;
  movimientos:any;


  constructor(private fb: FormBuilder,private cobroService:CobroService, private companyService:CompanyService, private router: Router){

    this.listForm = this.fb.group({
      serviceId: ['', Validators.required],
      accountId:  ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
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

    this.companyService.getAccounts().subscribe(
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
      },
      error => {
        console.error('No se obtuvieron ordenes', error);
       
      }
    );
  }


  obtainItems(servicio:any, ordenId:any){
    this.router.navigate(['/ui-components/items', servicio, ordenId]);
    // console.log('id ',ordenId);
    // console.log('servicio ',servicio);


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
