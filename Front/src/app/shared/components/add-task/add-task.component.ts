import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Task } from '../../models/task.model';
import { SubtaskService } from '../../services/subtask/subtask.service';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public task!: Task;
  public parentTask: number | null = null;

  @Output() taskToAdd = new EventEmitter<Task>();

  constructor(
    private subtaskService: SubtaskService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  getProjectName(idProjet: number | undefined){
    this.task.idProjet = idProjet;
  }
  getParentTask(idParent: number) {
    this.parentTask = idParent;
  }

  addTask() {
    if (this.parentTask) {
      this.subtaskService.setTask
    }
  }

}
