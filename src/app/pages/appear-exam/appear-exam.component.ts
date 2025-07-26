import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appear-exam',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './appear-exam.component.html',
  styleUrls: ['./appear-exam.component.scss']
})
export class AppearExamComponent implements OnInit {
  exams: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/exam-data.json').subscribe((data) => {
      this.exams = data.exams;
    });
  }
}
