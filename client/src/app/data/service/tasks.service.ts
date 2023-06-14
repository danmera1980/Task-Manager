import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task, TaskData } from '@app/core/models/task.interface';
import { environment } from '@env';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, BehaviorSubject, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.FetchTasks();
  }

  private apiUrl = environment['serverUrl']; // TODO put the url from the .env file

  FetchTasks(): void {
    let username: string = sessionStorage.getItem('username') || '';
    this.http
      .get<Task[]>(`${this.apiUrl}/tasks?owner=${username}`)
      .pipe(map((response) => response as Task[]))
      .subscribe({
        next: (response: Task[]) => this.tasks$.next(response as Task[]),
      });
  }

  GetAllTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  CreateTask(taskData: TaskData) {
    return this.http.post<Task>(`${this.apiUrl}/tasks`, taskData).subscribe({
      complete: () => this.toastr.success('Task Created'),
      next: (response: Task) => this.AddToTasksObservable(response as Task),
      error: (error) => {
        console.log(error);
        this.toastr.error(error);
      },
    });
  }

  AddToTasksObservable(task: Task): void {
    this.tasks$.pipe(take(1)).subscribe((tasks) => {
      this.tasks$.next([...tasks, task]);
    });
  }

  UpdateTask(task: Task) {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}`, task).pipe(
      tap((updatedTask) => {
        console.log('update');
        const tasks = this.tasks$.getValue();
        const taskIndex = tasks.findIndex((t) => t.id === updatedTask.id);
        tasks[taskIndex] = updatedTask;
        this.tasks$.next(tasks);
      })
    )
    .subscribe({
      complete: () => this.toastr.success('Updated'),
      error: (error) => this.toastr.error(error.message)
    })
  }
}
