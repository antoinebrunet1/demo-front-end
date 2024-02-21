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

    return this.httpClient.post<Question>(url, question);
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

  getAllQuestions() {
    const url: string = Constant.API_END_POINT + Constant.METHODS.GET_ALL_QUESTIONS;

    return this.httpClient.get<Question[]>(url);
  }

  getDifficultyLevelNumberFromNumber(difficultyLevelAsNumber: number): string {
    switch(difficultyLevelAsNumber) {
      case DifficultyLevelAsNumber.BASIC:
        return DifficultyLevelAsString.BASIC;
      case DifficultyLevelAsNumber.INTERMIDIATE:
        return DifficultyLevelAsString.INTERMIDIATE;
      case DifficultyLevelAsNumber.ADVANCED:
        return DifficultyLevelAsString.ADVANCED;
      default:
        throw new Error("The number difficulty level is not valid.");
    }
  }
}
