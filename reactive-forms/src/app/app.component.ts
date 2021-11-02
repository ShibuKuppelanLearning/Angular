import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, AsyncValidatorFn } from '@angular/forms';
import { CustomEmailValidator } from './custom-email-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames: string[] = ['Chris', 'Max'];


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.validateForbiddenUserNames.bind(this)]),
        'email': new FormControl(null, [], CustomEmailValidator.validate),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(): void {
    console.log(this.signupForm);
    console.log(this.signupForm.get('userData.username')?.errors?.['isUserNameForbidden']);
  }

  onAddHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getHobbies(): FormArray {
    return (<FormArray>this.signupForm.get('hobbies'));
  }

  validateForbiddenUserNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUserNames.indexOf(control.value) > -1) {
      return { 'isUserNameForbidden': true };
    }
    return null;
  }
}
