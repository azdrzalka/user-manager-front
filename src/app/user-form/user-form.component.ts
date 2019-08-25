import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Role } from '../role.enum';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  enableOptions: Array<string> = ['YES', 'NO'];
  roles: Array<string> = [];
  selected: string = '';

  usernameFormControl = new FormControl({value: this.data.user.username, disabled: !this.data.isNewUser}, Validators.required);
  nameControl = new FormControl(this.data.user.name, Validators.required);
  surnameControl = new FormControl(this.data.user.surname, Validators.required);
  enabledControl = new FormControl(this.data.user.enabled, Validators.required);
  roleControl = new FormControl(this.data.user.role, Validators.required);
  emailFormControl = new FormControl(this.data.user.email, [Validators.required, Validators.email]);
  formGroup: FormGroup = new FormGroup({
    username: this.usernameFormControl,
    name: this.nameControl,
    surname: this.surnameControl,
    role: this.roleControl,
    enabled: this.enabledControl,
    email: this.emailFormControl
  });

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService, public thisDialogRef: MatDialogRef<UserFormComponent>,private _fb: FormBuilder) {
    this.selected = data.user.role;
    this.roles = Object.keys(Role);
  }



  updateUser() {
    if (this.data.isNewUser) {
      this.data.user = this.formGroup.value;
      this.data.user.registrationDate = new Date();
      this.userService.add(this.data.user).subscribe((result) => this.thisDialogRef.close(result));
    } else {
      this.userService.update(this.data.user).subscribe(() => this.thisDialogRef.close());
    }
  }


}
