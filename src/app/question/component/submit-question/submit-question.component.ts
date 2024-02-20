import { Component } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { Question } from '../../model/question';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { DifficultyLevelAsString } from '../../model/difficulty-level-as-string';
import { MatDialog } from '@angular/material/dialog';
import { SubmissionInformationComponent } from '../submission-information/submission-information.component';
import { ValueSharingService } from '../../service/value-sharing.service';

@Component({
  selector: 'app-submit-question',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './submit-question.component.html',
  styleUrl: './submit-question.component.css'
})
export class SubmitQuestionComponent {
  difficultyLevelsAsStrings: string[] = [
    DifficultyLevelAsString.BASIC,
    DifficultyLevelAsString.INTERMIDIATE,
    DifficultyLevelAsString.ADVANCED
  ];
  private question: Question = new Question();
  // body: string;

  constructor(private questionService: QuestionService, public dialog: MatDialog, private valueSharingService: ValueSharingService) {}

  // onChangeOfBody(event: any): void {
  //   this.body = event;
  // }

  submitQuestion(form: NgForm): void {
    const formValue: any = form.value;

    this.question.body = formValue.body;
    this.question.difficultyLevel = this.questionService.getDifficultyLevelNumberFromString(formValue.difficultyLevelAsString);
    this.question.author = formValue.author;

    this.valueSharingService.submissionIsSuccessful = true;

    this.questionService.saveQuestion(this.question).subscribe(
      {
        next: response => {
          this.clearForm(form);

          this.openDialog();
        },
        error: error => {
          this.clearForm(form);

          this.valueSharingService.submissionIsSuccessful = false;

          this.openDialog();
        }
      }
    );
  }

  private clearForm(form: NgForm): void {
    form.resetForm();

    Object.keys(form.controls).forEach(key => {
       form.controls[key].markAsUntouched();
    });
  }

  private openDialog(): void {
    this.dialog.open(SubmissionInformationComponent);
  }
}