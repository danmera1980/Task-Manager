import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Status, TaskData } from '@app/core/models/task.interface';
import { TasksService } from '@app/data/service/tasks.service';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.scss'],
})
export class NewTaskDialogComponent {
  newTask: TaskData = {
    description: '',
    status: 'todo',
    owner: sessionStorage.getItem('username') || '',
  };

  constructor(
    public dialogRef: MatDialogRef<NewTaskDialogComponent>,
    private tasksService: TasksService
  ) {}

  createNewTask() {
    this.tasksService.CreateTask(this.newTask)
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
