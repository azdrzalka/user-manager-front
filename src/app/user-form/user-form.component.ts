import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, ErrorStateMatcher } from '@angular/material';
import { User } from '../models/user';
import { Role } from '../role.enum';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroupDirective, NgForm, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  roles: Array<string> = [];
  selected: string = '';

  usernameFormControl = new FormControl({value: '', disabled: !this.data.isNewUser}, Validators.required);
  formControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  formGroup: FormGroup = new FormGroup({
    usernameFormControl: this.usernameFormControl,
    formControl: this.formControl,
    emailFormControl: this.emailFormControl
  });

  matcher = new MyErrorStateMatcher();
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public thisDialogRef: MatDialogRef<UserFormComponent>,private _fb: FormBuilder) {
    this.selected = data.user.role;
    this.roles = Object.keys(Role);
  }



  updateUser() {
    if (this.data.isNewUser) {
      this.data.user.registrationDate = new Date();
      this.userService.add(this.data.user).subscribe(() => this.thisDialogRef.close());
    } else {
      this.userService.update(this.data.user).subscribe(() => this.thisDialogRef.close());
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}