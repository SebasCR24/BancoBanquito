import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = environment.CoreCobros_company;
  private header = {
    headers: new HttpHeaders({
      //'x-token':  environment.x_token,
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient) {

  }

  getServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/servicees`);
  }

  getAccounts(idCompany:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/companies/${idCompany}/accounts`);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCompanyById(id:any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/companies/${id}`);
  }
  // Métodos para crear, editar y deshabilitar usuarios
  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  editUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }

  disableUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  registerCompany(ruc:any,codeInternal:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/companies/register?ruc=${ruc}&codeInternalAccount=${codeInternal}`,this.header);
  }


}
