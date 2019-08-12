import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { DeleteComponent } from '../delete-dialog/delete-dialog.component';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = new MatTableDataSource<User>();
  displayedColumns = ['username', 'name', 'surname', 'email', 'role', 'registrationDate', 'enabled', 'actions'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.loadData();
  }

  loadData() {
    this.userService.getUser().subscribe(result => this.dataSource.data = result);
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  openDeleteModal(user: User): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {
        user: user
      },
    });

    dialogRef.afterClosed().subscribe(() => this.loadData());
  }

  openUserFormToAddNew(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {
        user: new User(),
        isNewUser: true
      }
    });

    dialogRef.afterClosed().subscribe(() => this.loadData());
  }

  openUserForm(user: User): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: {
        user: user,
        isNewUser: false
      }
    });

    dialogRef.afterClosed().subscribe(() => this.loadData());
  }

  isLastUser(): boolean {
    return this.dataSource.data.length == 1;
  }

}
