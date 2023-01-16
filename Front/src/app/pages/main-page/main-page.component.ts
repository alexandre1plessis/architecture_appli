import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProjectService } from 'src/app/shared/services/project/project.service';
import { Task } from '../../shared/models/task.model';
import { TaskService } from '../../shared/services/task/task.service';
import { AddProjectComponent } from '../../shared/components/add-project/add-project.component';
import { AddTaskComponent } from '../../shared/components/add-task/add-task.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public taskList: Task[] = [];
  public date = new FormControl(new Date());
  public matDatepicker: any;
  constructor(private taskService: TaskService,
    private projectService: ProjectService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskByDay(Date().toLocaleString());
  }

  openDialog(component: string): void {
    if (component === 'add-project') {
      const dialogRef = this.dialog.open(AddProjectComponent);
    } else if (component === 'add-task') {
      const dialogRef = this.dialog.open(AddTaskComponent);
    }

  //  dialogRef.afterClosed().subscribe(result => {
  //   console.log(result);
  // });
  }

  addTaskToList(task: Task) {
    this.taskList.unshift(task);
  }

  onClick(){
    console.log(this.matDatepicker);
  }

}
