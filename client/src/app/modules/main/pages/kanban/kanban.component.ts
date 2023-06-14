import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Status, Task } from '@app/core/models/task.interface';
import { TasksService } from '@app/data/service/tasks.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss'],
})
export class KanbanComponent {
  todo: Task[] = [];
  inProgress: Task[] = [];
  revision: Task[] = [];
  done: Task[] = [];
  boards = [
    { id: 'todo', board: this.todo, title: 'To Do' },
    { id: 'in_progress', board: this.inProgress, title: 'In Progress' },
    { id: 'revision', board: this.revision, title: 'Revision' },
    { id: 'done', board: this.done, title: 'Done' },
  ];

  tasks!: Task[];

  constructor(private tasksService: TasksService) {
    this.tasksService.GetAllTasks().subscribe((tasks) => {
      this.boards.map(board => board.board = [])
      tasks.map((task) => {
        switch (task.status) {
          case 'todo':
            this.boards[0].board.push(task);
            break;
          case 'in_progress':
            this.boards[1].board.push(task);
            break;
          case 'revision':
            this.boards[2].board.push(task);
            break;
          case 'done':
            this.boards[3].board.push(task);
            break;
        }
      });
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const movedItem = event.container.data[event.currentIndex];
      movedItem.status = event.container.id as Status;
      this.tasksService.UpdateTask(movedItem);
      console.log(movedItem);
    }
  }
}
