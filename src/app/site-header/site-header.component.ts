import { Component } from '@angular/core';
import { IUser } from '_course-resources/user/user.model';
import { UserService } from '_course-resources/user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  user:IUser | null = null;
  showMenuSignOut: boolean = false;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUser().subscribe(  {
      next: (user) => {this.user = user;},
    });
  }

  toggleSignOut() {
    this.showMenuSignOut = !this.showMenuSignOut;
  }

  signOut() {
    this.userService.signOut();
    this.showMenuSignOut = false;
  } 
} 
