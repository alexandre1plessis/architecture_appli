import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
    private taskService: TaskService,
    public dialogRef: MatDialogRef<AddTaskComponent>
  ) { }

  ngOnInit(): void {
  }

  getProjectName(idProjet: number | undefined){
    this.task.idProjet = idProjet;
  }
  getParentTask(idParent: number) {
    this.parentTask = idParent;
  }
  getTask(task: Task) {
    this.task = task;
  }

  addTask() {
    if (!this.task.name) { this.task.name = 'Tache' }
    if (!this.task.description) { this.task.description = '' }
    if (!this.task.idProjet) { this.task.idProjet= 0 }
    if (!this.task.color) { this.task.color = '#FFF' }
    if (!this.task.ordre) { this.task.ordre = 0 }
    
    if (this.parentTask) {
      this.subtaskService.setSubtask(this.task.name, this.task.idProjet, this.parentTask, this.task.description, this.task.color, this.task.ordre);
    }
    else {
      this.taskService.setTask(this.task.name, this.task.idProjet, this.task.description, this.task.color, this.task.ordre);
    }
  }

}
