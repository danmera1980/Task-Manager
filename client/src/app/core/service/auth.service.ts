import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { RegisterUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = environment['serverUrl']; // TODO put the url from the .env file

  GetAll() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  LoginUser(username: string) {
    return this.http.get(`${this.apiUrl}/users?username=${username}`);
  }

  RegisterUser(userData: RegisterUser) {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }

  UpdateUser(id: string, userData: RegisterUser) {
    return this.http.put(`${this.apiUrl}/users/${id}`, userData);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

  GetUserRole(){
    return sessionStorage.getItem('userRole')!=null?sessionStorage.getItem('userRole')?.toString():'';
  }
}
