import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../log-in/log-in.model';
import {CategoryDialogComponent} from '../category-dialog/category-dialog.component';
import {AdminDialogComponent} from '../admin-dialog/admin-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['id', 'username', 'role', 'delete', 'edit'];

  private users: User[] = [];

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(data => this.updateUsers());
  }

  openUpdateUserDialog(entry: User) {
    const dialogRef = this.openUserDialog(entry);

    dialogRef.afterClosed().subscribe(result => this.userService.updateUser(result).subscribe(() => this.updateUsers()));
  }

  openCreateUserDialog() {
    const dialogRef = this.openUserDialog();

    dialogRef.afterClosed().subscribe(result => this.userService.signUpUser(result).subscribe(() => this.updateUsers()));
  }

  openUserDialog(user: User = {username: '', role: {}} as User) {
    return this.dialog.open(AdminDialogComponent, {
      width: '250px',
      data: user
    });
  }
}
