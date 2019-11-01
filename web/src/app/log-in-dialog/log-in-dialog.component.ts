import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CategoryService} from '../category.service';
import {User} from '../log-in/log-in.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})
export class LogInDialogComponent implements OnInit {

  private user = {
    username: '',
    password: ''
  } as User;

  constructor(
    public dialogRef: MatDialogRef<LogInDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private categoryService: CategoryService,
    private router: Router) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close(this.user);
  }

  switchToRegistration() {
    this.dialogRef.close();
    this.router.navigate(['/register']);
  }
}
