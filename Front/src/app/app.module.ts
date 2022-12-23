import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListProjectsComponent } from './shared/components/list-projects/list-projects.component';
import { AddProjectComponent } from './shared/components/add-project/add-project.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { AddSubtaskComponent } from './shared/components/add-subtask/add-subtask.component';
import { SelectTaskComponent } from './shared/components/select-task/select-task.component';
import { TaskComponent } from './shared/components/task/task.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MainPageComponent,
    ListProjectsComponent,
    AddProjectComponent,
    ProjectsComponent,
    AddSubtaskComponent,
    SelectTaskComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
