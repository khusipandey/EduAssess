import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ExamComponent } from './pages/exams/exams.component'; // ✅ Added
import { BrowserModule } from '@angular/platform-browser';
//import { AppearExamComponent } from './pages/appear-exam/appear-exam.component';
import { CreateExamComponent } from './pages/create-exam/create-exam.component'; // ✅

import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'exams', component: ExamComponent },
  { path: 'create-exam', component: CreateExamComponent },
  {
    path: 'create-exam',
    loadComponent: () =>
      import('./pages/create-exam/create-exam.component').then(m => m.CreateExamComponent)
  },
  {
    path: 'appear-exam',
    loadComponent: () =>
      import('./pages/appear-exam/appear-exam.component').then(m => m.AppearExamComponent) // ✅ Correct route
  }
];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [ BrowserModule,RouterModule]
})
export class AppRoutingModule {}
