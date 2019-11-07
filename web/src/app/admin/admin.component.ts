import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../log-in/log-in.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  displayedColumns: string[] = ['id', 'username', 'role'];

  private users: User[] = [];

  ngOnInit() {
    this.updateUsers();
  }

  private updateUsers() {
    this.userService.getAllUsers().subscribe(data => this.users = data);
  }
}
