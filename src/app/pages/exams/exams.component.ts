import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import examContent from '../../../assets/exam.content.json'; // ✅ correct default import for JSON

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor],
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamComponent {
  content = examContent;
}
