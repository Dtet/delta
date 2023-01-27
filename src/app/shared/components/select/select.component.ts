import { IFiltro } from './../../../models/filter.model';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/utils/form-select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent  {
  @Input() question!: QuestionBase<any>;
  @Input() form!: FormGroup;

  people$!: Observable<IFiltro[]> ;

  get isValid() {return this.form.controls [this.question.key].valid; }
  constructor() { }
  ngOnInit () {
    // this.people$ = this.dataService.getPeople();
  }

}
