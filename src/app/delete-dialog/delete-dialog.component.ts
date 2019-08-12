import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../models/user';
import { Role } from '../role.enum';
import { UserService } from '../services/user.service';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-delete',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteComponent {

  user: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    public thisDialogRef: MatDialogRef<DeleteComponent>) {
    this.user = data.user;
  }


  deleteUser(): void {
    this.userService.delete(this.user.username).subscribe(
      () => this.thisDialogRef.close(),
      (err) => console.log(err)
    );
  }

}
