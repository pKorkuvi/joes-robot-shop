import { Component } from '@angular/core';
import { IUser, IUserCredentials } from '../user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false; 
  constructor(private userService: UserService, private router: Router) {

  }

  signIn() {
      console.log('User signed in:', this.credentials);
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe( {
      next: () => this.router.navigate(['/catalog'])
       // console.log('User signed in:', this.credentials);
    });
    /*  error: () => {
        console.error(this.signInError = true);

      }
      */

  }

  signOut() {
    this.userService.signOut();
  } 

}
