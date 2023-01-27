import { QuestionBase } from "./form-select";

export class RadioQuestion extends QuestionBase<string> {
    override controlType = 'radio';
    override options: {key: string, value: string} [] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}