import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { QuestionService } from '../../service/question.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    "body",
    "category",
    "difficultyLevel",
    "author"
  ];
  dataSource = new MatTableDataSource();

  constructor(private questionService: QuestionService,
    private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(
      response => {
          this.dataSource.data = response;
      }
    );
  }

  getDifficultyLevelNumberFromNumber(difficultyLevelAsNumber: number): string {
    return this.questionService.getDifficultyLevelNumberFromNumber(difficultyLevelAsNumber);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
