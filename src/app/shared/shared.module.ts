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


@NgModule({
  declarations: [
    DialogComponent,
    SelectComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    FilterComponent
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
