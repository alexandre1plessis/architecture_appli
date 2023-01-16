import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-select-task',
  templateUrl: './select-task.component.html',
  styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit {

  @Input() tasks!: Task[];
  @Output() taskSelected = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  selectChange(event: any): void{
    console.log(event);
    this.taskSelected.emit(event);
  }
}
