import { IRadioQuestionOption } from '@models/filter.model';
import { QuestionBase } from './form-select';

export class RadioQuestion extends QuestionBase<string> {
  override controlType = 'radio';
  option: { key: string; value: string }[] = [];

  constructor(options: IRadioQuestionOption = {}) {
    super(options);
    this.options = options['option'] || [];
  }
}
