import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubmitQuestionComponent } from './question/submit-question/component/submit-question.component';
import { NavigationBarComponent } from './navigation-bar/component/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SubmitQuestionComponent,
    NavigationBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
