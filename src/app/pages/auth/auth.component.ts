import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isSignUp = false;

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }
}
