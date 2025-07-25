import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ExamComponent } from './pages/exams/exams.component'; // ✅ Added

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'exams', component: ExamComponent }, // ✅ Exams page
  { path: 'create-exam', component: ExamComponent }, // ⬅️ You can route to separate components later
  { path: 'appear-exam', component: ExamComponent }, // ⬅️ Same as above for now
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
