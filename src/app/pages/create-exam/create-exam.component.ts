import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import content from '../../../assets/create-exam.json';

@Component({
  selector: 'app-create-exam',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss']
})
export class CreateExamComponent {
  createExamContent = content.createExamSection;
  examData: any = {};
  validationErrors: Record<string, string> = {};

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.validationErrors = {};

      this.createExamContent.fields.forEach(field => {
        
        const control = form.controls[field.name];
        if (control && control.invalid) {
          if (control.errors?.['required']) {
            this.validationErrors[field.name] = `${field.label} is required.`;
          } else if (control.errors?.['pattern']) {
            this.validationErrors[field.name] = field.validators?.patternMsg ?? `${field.label} does not match the required pattern.`;
          } else if (control.errors?.['min']) {
            this.validationErrors[field.name] = field.validators?.minMsg ?? `${field.label} does not meet the minimum value.`;
          }
        }
      });

      return;
    }

    this.validationErrors = {};
    console.log('✅ Exam Created:', this.examData);
    alert('Exam created successfully!');
  }
}
