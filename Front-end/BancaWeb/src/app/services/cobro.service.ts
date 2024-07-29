import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CobroService {
  private apiUrl = environment.CoreCobros_cobro;
  private header = {
    headers: new HttpHeaders({
      //'x-token':  environment.x_token,
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }

  cambioEstadoOrder(nrOrder:any,status:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}orders/${nrOrder}/status?status=${status}`,this.header)
  }

  automaticDebitByOrder(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/debitAuto/by-order/${id}`)
  }

  collectionByOrder(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/collections/by-order/${id}`)
  }
  
  crearOrder(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/orders`,data,this.header)
  }

  paymentByCuenta(cuenta:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/payments/records/${cuenta}`);
  }
}
