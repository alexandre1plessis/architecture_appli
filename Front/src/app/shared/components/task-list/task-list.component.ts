import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  
  public taskList: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.getTaskByDay(Date().toLocaleString());
  }

  addTaskToList(task: Task) {
    this.taskList.unshift(task);
  }
}
