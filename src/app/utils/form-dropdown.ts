import { IDropdownQuestionOptions } from "@models/filter.model";
import { QuestionBase } from "./form-select";

export class DropdownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
     options: {key: string, value: string}[] = [];

    constructor(options: IDropdownQuestionOptions = {}) {
        super(options);
        this.options = options['options'] || [];
      }
}