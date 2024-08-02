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
  

  crearOrder(file: File, orden:any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('order', new Blob([JSON.stringify(orden)], {
      type: "application/json"
    }));

    return this.http.post<any>(`${this.apiUrl}/orders`,formData)
  }

  paymentByCuenta(cuenta:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/payments/records/${cuenta}`);
  }
}
