import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AddProjectComponent } from './shared/components/add-project/add-project.component';
import { ProjectsComponent } from './shared/components/projects/projects.component';
import { SelectTaskComponent } from './shared/components/select-task/select-task.component';
import { TaskComponent } from './shared/components/task/task.component';
import { TaskListComponent } from './shared/components/task-list/task-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    MainPageComponent,
    AddProjectComponent,
    ProjectsComponent,
    SelectTaskComponent,
    TaskComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
  ],
  
  providers: [
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
