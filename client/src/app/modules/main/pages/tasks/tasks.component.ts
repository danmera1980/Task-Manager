import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '@app/core/models/task.interface';
import { TasksService } from '@app/data/service/tasks.service';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks!: Task[];
  displayedColumns: string[] = [ 'description', 'status'];

  constructor(
    private tasksService: TasksService,
    private newTaskDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tasksService.GetAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  newTask() {
    this.newTaskDialog.open(NewTaskDialogComponent, {
      width:'50vw',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
    });
  }
}
