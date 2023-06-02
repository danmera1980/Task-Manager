import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  apiUrl = environment['serverUrl']; // TODO put the url from the .env file

  GetAll() {
    return this.http.get(`${this.apiUrl}/user`);
  }

  LoginUser(username: string) {
    return this.http.get(`${this.apiUrl}/user/${username}`);
  }

  RegisterUser(userData: any) {
    return this.http.post(`${this.apiUrl}/user`, userData);
  }

  UpdateUser(id: string, userData: any) {
    return this.http.put(`${this.apiUrl}/user/${id}`, userData);
  }
}
