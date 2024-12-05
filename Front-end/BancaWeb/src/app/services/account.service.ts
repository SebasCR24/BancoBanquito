import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.Core_account;
  private header = {
    headers: new HttpHeaders({
      //'x-token':  environment.x_token,
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }


  obtainAccount(codeInternal:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/accounts/${codeInternal}`,this.header)
  }

  obtainTransaction(codeInternal:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/account-transactions/${codeInternal}`,this.header)
  }
}
