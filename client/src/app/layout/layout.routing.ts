import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KanbanComponent } from "@app/modules/main/pages/kanban/kanban.component";
import { MainComponent } from "@app/modules/main/pages/main.component";
import { TasksComponent } from "@app/modules/main/pages/tasks/tasks.component";
import { LayoutComponent } from "./layout.component";

const routes: Routes = [

  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'tasks',
        pathMatch: 'full'
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'board',
        component: KanbanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
