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
    return this.http.put<any>(`${this.apiUrl}/orders/status?status=${status}&uniqueId=${nrOrder}`,this.header)
  }

  automaticDebitByOrder(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/debitAuto/by-order/${id}`)
  }

  obtainItemCollection(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/collections/by-order/${id}`)
  }

  obtainItemAutomaticCollection(id:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/automaticDebits/by-order/${id}`)
  }

  getOrderByServiceAndDate(serviceId:any, accountId:any, startDate:any, endDate:any ):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/orders/search?serviceId=${serviceId}&accountId=${accountId}&startDate=${startDate}&endDate=${endDate}`)
  }  

  crearOrderRecaudo(file: File, orden:any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('order', new Blob([JSON.stringify(orden)], {
      type: "application/json"
    }));

    return this.http.post<any>(`${this.apiUrl}/orders/collection`,formData)
  }

  crearOrderCobroAutomatico(file: File, orden:any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('order', new Blob([JSON.stringify(orden)], {
      type: "application/json"
    }));

    return this.http.post<any>(`http://Core-Cobros-ALB-538320160.us-east-1.elb.amazonaws.com/orders/automatic-debit`,formData)
  }

  paymentByCuenta(cuenta:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/payments/by-item-collection/${cuenta}`);
  }
}
