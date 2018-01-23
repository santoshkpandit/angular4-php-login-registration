import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/index';
import { AlertService, UserService ,AuthenticationService} from '../_services/index';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

    currentUser: User;
    users: User[] = [];

    constructor( private router: Router,private userService: UserService, private alertService: AlertService, private authenticationService: AuthenticationService,) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();

    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => {  this.alertService.success('Registration successful', true);this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { 
        this.users = users; });
    }
    logoutUser(){
      this.authenticationService.logout();
      this.alertService.success('logout successful', true);
      this.router.navigate(['/login']);
    }

}
