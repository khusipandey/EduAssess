import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'exams',
    loadComponent: () =>
      import('./pages/exams/exams.component').then((m) => m.ExamComponent)
  },
  {
    path: 'exams/appear',
    loadComponent: () =>
      import('./pages/appear-exam/appear-exam.component').then(
        (m) => m.AppearExamComponent
      )
  }
];
