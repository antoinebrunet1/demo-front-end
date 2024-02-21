import { Routes } from '@angular/router';
import { HomeComponent } from './home/component/home.component';
import { QuestionsComponent } from './question/questions/component/questions.component';
import { SubmitQuestionComponent } from './question/submit-question/component/submit-question.component';

export const routes: Routes = [
    {
        'path': '',
        component: HomeComponent
    },
    {
        'path': 'submit-question',
        component: SubmitQuestionComponent
    },
    {
        'path': 'questions',
        component: QuestionsComponent
    }
];
