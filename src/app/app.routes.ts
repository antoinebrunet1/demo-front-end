import { Routes } from '@angular/router';
import { SubmitQuestionComponent } from './question/component/submit-question/submit-question.component';
import { HomeComponent } from './home/component/home.component';

export const routes: Routes = [
    {
        'path': '',
        component: HomeComponent
    },
    {
        'path': 'submit-question',
        component: SubmitQuestionComponent
    }
];
