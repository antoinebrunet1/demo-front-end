import { Routes } from '@angular/router';
import { SubmitQuestionComponent } from './question/component/submit-question/component/submit-question.component';
import { HomeComponent } from './home/component/home.component';
import { QuestionsComponent } from './question/component/questions/component/questions.component';

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
