import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Role, User} from '../log-in/log-in.model';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>, @Inject(MAT_DIALOG_DATA) public user: User) { }

  roles: Role[] = [{id: 1, name: 'ADMIN'}, {id: 2, name: 'USER'}];

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.user.role = this.roles.find(x => x.id == this.user.role.id);
    this.dialogRef.close(this.user);
  }

}
