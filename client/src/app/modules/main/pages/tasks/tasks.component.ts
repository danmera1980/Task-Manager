import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks = [
    {
      id: '1',
      description: 'lorem ipsum 1',
      status: 'Completed',
    },
    {
      id: '2',
      description: 'lorem ipsum 2',
      status: 'In Progress',
    },
    {
      id: '3',
      description: 'lorem ipsum 3',
      status: 'Backlog',
    },
  ];
  displayedColumns: string[] = ['id', 'description', 'status'];

  newTask() {}
}
