import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProject } from '../../interfaces/iproject';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  public listProject: IProject[] = []
  
  @Output() project = new EventEmitter<IProject>();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.listProject = this.projectService.getAllProjects();
  }
  getProject(id: number): void {
    this.project.emit(this.projectService.getProjectById(id));
  }
  addProject(name: string): void {
    this.projectService.saveNewProject(name);
  }
  updateProject(id: number, name: string): void {
    this.projectService.updateProject(id, name);
  }
  deleteProject(id: number): void{
    this.projectService.deleteProject(id);
  }

}
