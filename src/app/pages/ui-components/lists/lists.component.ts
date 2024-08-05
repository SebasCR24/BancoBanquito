import { Component, OnInit } from '@angular/core';
import { CobroService } from 'src/app/services/cobro.service';
import { CompanyService } from 'src/app/services/company.service';
import { AccountService } from 'src/app/services/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class AppListsComponent  implements OnInit {
  listForm: FormGroup;
  accounts:any;
  accountValue:any;
  payments:any;
  empresa:any;
  cuentaporDefecto:any;
  usuario:any;


  constructor(private fb: FormBuilder,private cobroService:CobroService, private companyService:CompanyService, private router: Router, private accountService:AccountService){
    const empresa2 = localStorage.getItem('empresa');
    const usuario2 = localStorage.getItem('usuario');

    if (usuario2) {
      this.usuario = JSON.parse(usuario2);
    } else {
      this.usuario = null;
    }

    if (empresa2) {
      this.empresa = JSON.parse(empresa2);
    } else {
      this.empresa = null;
    }

    this.listForm = this.fb.group({
      accountId:  ['', Validators.required],
    });

  }

  ngOnInit():void{ 

    this.companyService.getAccounts(this.empresa.uniqueId).subscribe(
      response => {
        console.log('Se obtieron cuentas de la empresa', response);
        this.accounts=response
        this.cuentaporDefecto=this.accounts[0]

        this.listForm.patchValue({
          accountId: this.cuentaporDefecto ? this.cuentaporDefecto.codeInternalAccount : ''
        });

        this.fetchAccountData(this.cuentaporDefecto.codeInternalAccount);
      },
      error => {
        console.error('No se obtuvieron cuentas de la empresa', error);
       
      }
    );
  }

  fetchAccountData(accountId: string) {
    this.accountService.obtainAccount(accountId).subscribe(
      response => {
        console.log('Se obtuvo el valor que tiene la cuenta', response);
        this.accountValue = response;
      },
      error => {
        console.error('No se obtuvo el valor que tiene la cuenta', error);
      }
    );
  
    this.accountService.obtainTransaction(accountId).subscribe(
      response => {
        console.log('Se obtuvieron los movimientos hacia la cuenta', response);
        this.payments = response;
      },
      error => {
        console.error('No se obtuvieron los pagos hacia la cuenta', error);
      }
    );
  }

  onSubmit() {
    let accountId=this.listForm.value.accountId

    this.accountService.obtainAccount(accountId).subscribe(
      response => {
        console.log('Se obtuvo el valor que tiene la cuenta', response);
        this.accountValue=response
      },
      error => {
        console.error('No se obtuvo el valor que tiene la cuenta', error);
       
      }
    );


    this.accountService.obtainTransaction(accountId).subscribe(
      response => {
        console.log('Se obtieron los movimientos hacia la cuenta', response);
        this.payments=response
      },
      error => {
        console.error('No se obtieron los pagos hacia la cuenta', error);
       
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