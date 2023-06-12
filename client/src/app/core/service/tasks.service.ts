import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  apiUrl = environment['serverUrl']; // TODO put the url from the .env file

  getAll(){
    return this.http.get(`${this.apiUrl}/tasks`)
  }

  CreateTask(taskData: any) {
    return this.http.post(`${this.apiUrl}/tasks`, taskData);
  }
}
