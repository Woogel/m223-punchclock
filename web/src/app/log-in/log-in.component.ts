import {Component, OnInit} from '@angular/core';
import {User} from './log-in.model';
import {UserService} from '../user.service';
import {LocalStorageService} from '../local-storage.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {LogInDialogComponent} from '../log-in-dialog/log-in-dialog.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private userService: UserService, private router: Router, private localStorageService: LocalStorageService) {
  }

  private isRegistration: boolean;
  private dialogDescription: string;

  ngOnInit() {
    this.isRegistration = this.route.snapshot.data.registration;
    this.dialogDescription = this.isRegistration ? 'Registration' : 'Log-In';
    this.openDialog();
  }

  loginUser(user: User) {
    this.userService.loginUser(user).subscribe(response => {
      this.localStorageService.writeAuthToken(response.headers.get('Authorization'));
      this.router.navigate(['/']);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogInDialogComponent, {
      width: '250px',
      data: {description: this.dialogDescription, isRegistration: this.isRegistration}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (this.isRegistration) {
          this.userService.signUpUser(result).subscribe(user => this.loginUser(result));
        } else {
          this.loginUser(result);
        }
      }
    });
  }
}
