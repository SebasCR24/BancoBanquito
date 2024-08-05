import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.CoreCobros_company;
  private header = {
    headers: new HttpHeaders({
      //'x-token':  environment.x_token,
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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

  userCreate(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/users/`,data,this.header);
  }

  resetPassword(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}users/resetPassword`,data,this.header)
  }

  login(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/users/login`,data,this.header);
  }
}
