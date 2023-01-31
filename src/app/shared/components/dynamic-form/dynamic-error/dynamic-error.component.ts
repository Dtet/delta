import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.css']
})
export class DynamicErrorComponent implements OnInit {
  
  @Input() fieldName!: string;
  formName!: FormGroup;
  constructor(
    private formGroupDirective: FormGroupDirective, 
  ) { }

  ngOnInit(): void {
    this.formName = this.formGroupDirective.control;
  }
  

}
