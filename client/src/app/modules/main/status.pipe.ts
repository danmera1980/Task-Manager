import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '@app/core/models/task.interface';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: Status): string {
    switch (value) {
      case 'todo':
        return 'To Do';
      case 'in_progress':
        return 'In Progress';
      case 'revision':
        return 'Revision';
      case 'done':
        return 'Done';
      default:
        return value;
    }
  }
}
