import { Injectable } from '@angular/core';
import { ITask } from '../../interfaces/itask';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})

export class TaskService implements ITask {
  
  public id?: number | undefined;
  public name?: string | undefined;
  public color?: string | undefined;
  public description?: string | undefined;
  public ordre?: number | undefined;

  constructor() { }

  // METHODES SURCHARGEES
  getAllTask(): Task[] {
    let tabTask: Task[] = [];
    /*
    * Recuperation des taches
    */
    return tabTask;
  }
  getTaskByDay(date: string): Task[] {
    let taskList: Task[] = [];
    /*
    * Recuperation des taches pour un jour donne
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
  setTimeByTask(id: number, timeByDay: number, isFinalTime: boolean): void{
    /*
    * Sauvegarder le temps passe sur une tache
    */
  }
  // METHODES PERSONNELLES
  updateTask(id: number, name: string, description: string, color: string): void {
  }
  setTask(name: string, description: string, color: string, ordre: number): void {
  }

}
