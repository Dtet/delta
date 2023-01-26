import { Injectable } from '@angular/core';
import { DropdownQuestion } from 'src/app/utils/form-dropdown';
import { RadioQuestion } from 'src/app/utils/form-radio';
import { QuestionBase } from 'src/app/utils/form-select';
import { TextboxQuestion } from 'src/app/utils/form-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new RadioQuestion({
        key: 'type',
        label: 'Job Type',
        order: 4,
        options: [
          {key: 'hero', value: 'Hero'},
          {key: 'sidekick', value: 'Sidekick'}
        ]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
