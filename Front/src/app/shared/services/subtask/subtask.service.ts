import { Injectable } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class SubtaskService implements ITask {
  
    public id?: number | undefined;
    public name?: string | undefined;
    public color?: string | undefined;
    public description?: string | undefined;
    public ordre?: number | undefined;
  
    constructor() { }
  
    // METHODES SURCHARGEES
    getAllTask(): Task[] {
      let taskList: Task[] = [];
      /*
      * Recuperation des taches
      */
      return taskList;
    }
    getTaskByDay(date: string): Task[] {
      let taskList: Task[] = [];
      /*
      * Recuperation des taches
      */
      return taskList;
    }
    getTaskById(id: number): Task {
      let task: Task = {id: 3, name: 'mise en place de la BDD', color: "#ff0000", description: '', ordre: 0};
      /*
      * Recuperation d'une tache
      */
     return task;
    }
    getTaskByProject(id_projet: number): Task[] {
      let tabTask: Task[] = [];
      /*
      * Recuperation des taches d'un projet
      */
      return tabTask;
    }
    getTaskByColor(color: string): Task[] {
      let tabTask: Task[] = [];
      /*
      * Recuperation des taches en fonction d'une couleur
      */
      return tabTask;
    }
    getTimeByDay(day: string, id: number): string {
      let timeByDay: string = '3h12m';
      /*
      * Recuperation des taches
      */
      return timeByDay;
    }  
    deleteTask(id: number): void {
    }

    // METHODES PERSONNELLES
    updateTask(id: number, id_parent: number, name: string, description: string, color: string): void {
    }
  
  }
  