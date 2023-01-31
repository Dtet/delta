import { ITextboxQuestionOptions } from "@models/filter.model";
import { QuestionBase } from "./form-select";

export class TextboxQuestion extends QuestionBase<string> {
    override controlType = 'textbox';
    type: string;

    constructor(options: ITextboxQuestionOptions = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}