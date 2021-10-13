import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('frm') form: NgForm;
  defaultQuestion: string = 'teacher';
  questionAnswer: string = '';
  gender: string = '';
  user: { username: string, mail: string, secretQuestion: string, answer: string, gender: string };

  constructor() {
    this.user = { username: '', mail: '', secretQuestion: '', answer: '', gender: '' };
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  suggestName(): void {
    const user = "super-user";
    // this.form.form.setValue({
    //   userData: {
    //     username: user,
    //     email: ""
    //   },
    //   gender: "",
    //   secretQuestion: "",
    //   questionAnswer: ""
    // });
    this.form.form.patchValue({
      userData: {
        username: user,
      }
    });
  }

  onSubmit() {
    console.log(this.form);
    this.user.username = this.form.value.userData.username;
    this.user.mail = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secretQuestion;
    this.user.answer = this.form.value.questionAnswer;
    this.user.gender = this.form.value.gender;
  }

  onReset(){
    this.form.reset();
  }
}
