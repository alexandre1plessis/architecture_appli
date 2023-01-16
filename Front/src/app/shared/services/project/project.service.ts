import { Injectable } from '@angular/core';
import { IProject } from '../../interfaces/iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getAllProjects(): IProject[] {
    const tabProject: IProject[] = [];
    /*
    * Recuperation des projets
    */
    return tabProject;
  }
  getProjectById(id:number): IProject {
    let project: IProject = {id: 3, name: 'mise en place de la BDD'};
    /*
    * Recuperation d'un projet
    */
    return project;
  }
  saveNewProject(name: string): void {
    /*
    * Envoie du nom du nouveau projet
    */
  }
  updateProject(id: number, name: string): void {
    /*
    * Edite du nouveau nom
    */
  }
  deleteProject(id: number): void {
    /*
    * Suppression du projet avec l'id correspondant
    */
  }
  
}