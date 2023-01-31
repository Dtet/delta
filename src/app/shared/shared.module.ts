import { MaterialModule } from './../material-design/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { SelectComponent } from './components/select/select.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { DynamicFieldInputComponent } from './components/dynamic-field/dynamic-field-input/dynamic-field-input.component';
import { DynamicFieldSelectComponent } from './components/dynamic-field/dynamic-field-select/dynamic-field-select.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicErrorComponent } from './components/dynamic-form/dynamic-error/dynamic-error.component';


@NgModule({
  declarations: [
    DialogComponent,
    SelectComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    FilterComponent,
    DynamicFormComponent,
    DynamicComponent,
    DynamicFieldInputComponent,
    DynamicFieldSelectComponent,
    DynamicFieldComponent,
    DynamicErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    DialogComponent,
    SelectComponent,
    FormComponent,
    TableComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
