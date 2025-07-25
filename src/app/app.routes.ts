import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExamComponent } from './pages/exams/exams.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exams', loadComponent: () => import('./pages/exams/exams.component').then(m => m.ExamComponent) },
  { path: 'exams', component: ExamComponent }
];
