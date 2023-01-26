import { QuestionBase } from "./form-select";

export class DropdownQuestion extends QuestionBase<string> {
    override controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}