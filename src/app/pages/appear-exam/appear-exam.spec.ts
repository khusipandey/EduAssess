import { ComponentFixture, TestBed } from '@angular/core/testing';

// Correct the import path or ensure the file exists and exports AppearExam
import { AppearExam } from './appear-exam/appear-exam.component';

describe('AppearExam', () => {
  let component: AppearExam;
  let fixture: ComponentFixture<AppearExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppearExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
