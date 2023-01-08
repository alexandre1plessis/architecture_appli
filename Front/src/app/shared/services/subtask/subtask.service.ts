import { Injectable } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { Task } from '../../models/task.model';
import { TaskService } from '../task/task.service';

@Injectable({
  providedIn: 'root'
})

export class SubtaskService extends TaskService {
  updateSubtask(id: number, idParent: number, name: string, description: string, color: string): void {
  }
    
  setSubtask(name: string, idProjet:number, idParent: number, description: string, color: string, ordre: number): void {
  }
  
}
  