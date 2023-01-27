import { QuestionBase } from "./form-select";

export class DropdownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
    override options: {key: string, value: string}[] = [];

  
}