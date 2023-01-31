import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup!: FormGroup;
  @Input() model: any = {} 

  fields: string[] = [];

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new FormControl(fieldProps.value, validators);
      this.fields.push({...fieldProps, fieldName: field});
    }
    return formGroupFields;
  }

  private addValidator(rules: string) {
    if (!rules) {
      return []
    }
    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case "required":
          return Validators.required;
      }  
      return false
    });
    return validators;
  }

}
