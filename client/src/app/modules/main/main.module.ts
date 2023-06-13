import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main.component';
import { MaterialModule } from '@app/style/material.module';
import { LayoutModule } from '@app/layout/layout.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { NewTaskDialogComponent } from './pages/tasks/new-task-dialog/new-task-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, TasksComponent, KanbanComponent, NewTaskDialogComponent],
  imports: [CommonModule, MaterialModule, LayoutModule, FormsModule],
})
export class MainModule {}
