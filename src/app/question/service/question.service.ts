import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './constant/constant';
import { Question } from '../model/question';
import { DifficultyLevelAsString } from '../model/difficulty-level-as-string';
import { DifficultyLevelAsNumber } from '../model/difficulty-level-as-number';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}
  
  saveQuestion(question: Question) {
    const url: string = Constant.API_END_POINT + Constant.METHODS.SAVE_QUESTION;

    return this.httpClient.post<Question>(url, question, { observe: 'response' });
  }

  getDifficultyLevelNumberFromString(difficultyLevelAsString: string): number {
    switch(difficultyLevelAsString) {
      case DifficultyLevelAsString.BASIC:
        return DifficultyLevelAsNumber.BASIC;
      case DifficultyLevelAsString.INTERMIDIATE:
        return DifficultyLevelAsNumber.INTERMIDIATE;
      case DifficultyLevelAsString.ADVANCED:
        return DifficultyLevelAsNumber.ADVANCED;
      default:
        throw new Error("The string difficulty level is not valid.");
    }
  }
}
