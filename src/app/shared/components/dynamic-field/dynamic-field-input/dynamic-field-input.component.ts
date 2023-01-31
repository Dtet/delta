import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-field-input',
  templateUrl: './dynamic-field-input.component.html',
  styleUrls: ['./dynamic-field-input.component.css']
})
export class DynamicFieldInputComponent {

  @Input() field: any;
  formName!: FormGroup;
  constructor(private formgroupDirective: FormGroupDirective) {
    this.formName = formgroupDirective.control;
  }

}
