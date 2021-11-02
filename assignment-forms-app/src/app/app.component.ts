import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectNameValidator } from './project-name-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  projectStatus: string[] = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup = new FormGroup({
    // projectName: new FormControl(null, [Validators.required,this.projectNameValidator]),
    projectName: new FormControl(null, [Validators.required], [ProjectNameValidator.validateProjectName]),
    emailId: new FormControl(null, [Validators.required, Validators.email]),
    status: new FormControl(null, Validators.required)
  });

  onSubmit() {
    console.log(this.projectForm);
  }

  projectNameValidator(control: FormControl): { [key: string]: boolean } | null {
    const error: { [key: string]: boolean } = { 'InvalidProjectName': true };
    if (control.value === "Test") {
      return error;
    }
    return null;
  }
}