import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [CommonModule], // Required for *ngIf to work in standalone
})
export class AuthComponent {
  isSignUp = false;

  toggleForm() {
    this.isSignUp = !this.isSignUp;
  }
}
