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
  empresa:any;


  constructor(private fb: FormBuilder,private cobroService:CobroService, private companyService:CompanyService, private router: Router){

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
    let accountId=this.listForm.value.accountId

    this.cobroService.paymentByCuenta(23).subscribe(
      response => {
        console.log('Se obtieron los pagos hacia la cuenta', response);
        this.payments=response
      },
      error => {
        console.error('No se obtieron los pagos hacia la cuenta', error);
       
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
