import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main.component';
import { MaterialModule } from '@app/style/material.module';
import { LayoutModule } from '@app/layout/layout.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { KanbanComponent } from './pages/kanban/kanban.component';

@NgModule({
  declarations: [MainComponent, TasksComponent, KanbanComponent],
  imports: [CommonModule, MaterialModule, LayoutModule],
})
export class MainModule {}
