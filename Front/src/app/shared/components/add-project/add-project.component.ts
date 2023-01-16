import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { IProject } from '../../interfaces/iproject';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  public projectName: string = '' ;

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<AddProjectComponent>
  ) { }

  ngOnInit(): void {
  }

  addProject() {
    this.projectService.saveNewProject(this.projectName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
