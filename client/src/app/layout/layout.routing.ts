import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KanbanComponent } from "@app/modules/main/pages/kanban/kanban.component";
import { MainComponent } from "@app/modules/main/pages/main.component";
import { TasksComponent } from "@app/modules/main/pages/tasks/tasks.component";
import { LayoutComponent } from "./layout.component";
import { AuthGuard } from "@app/core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'board',
        component: KanbanComponent, canActivate: [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
