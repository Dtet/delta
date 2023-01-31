import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, AfterViewInit, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { DynamicFieldInputComponent } from './dynamic-field-input/dynamic-field-input.component';
import { DynamicFieldSelectComponent } from './dynamic-field-select/dynamic-field-select.component';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements AfterViewInit{

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicFieldInputComponent
    },
    {
      name: 'select',
      component: DynamicFieldSelectComponent
    },
    {
      name: 'select',
      component: DynamicFieldInputComponent
    },
    {
      name: 'date',
      component: DynamicFieldInputComponent
    }
  ]

  @ViewChild('dynamicInputContainer', {read: ViewContainerRef})
  dynamicInputContainer!: ViewContainerRef;
  @Input() field: any;
  formName!: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective, private cd: ChangeDetectorRef){}

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }
  registerDynamicField(){
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type)
    const dynamicComponent = this.dynamicInputContainer.createComponent(componentInstance)
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string):any {
    let componentDynamic = this.supportedDynamicComponents.find(c => c.name === type);
    return componentDynamic!.component || DynamicFieldInputComponent;
  }
}
