import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import contentData from '../../../assets/home.content.json';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  content = contentData;

  constructor(private router: Router) {}

  navigateFromHero(action: string) {
    if (action.toUpperCase() === 'EXAMS') {
      this.router.navigate(['/exams']);
    } else if (action.toUpperCase() === 'ANNOUNCEMENTS') {
      this.router.navigate(['/announcements']);
    }
  }
}
