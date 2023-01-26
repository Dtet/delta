import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestioncontrolService } from '@shared/services/questioncontrol.service';
import { QuestionBase } from 'src/app/utils/form-select';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() isDialog!: boolean;

  @Output() close = new EventEmitter<any>();
  @Output() submit = new EventEmitter<any>();

  form!: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestioncontrolService,
    private _snackBar: MatSnackBar) {  }

    ngOnInit() {
      this.form = this.qcs.toFormGroup(this.questions);
    }
  
    onSubmit() {
      this._snackBar.open(`Saved Successfully`, '', {
        duration: 2000,
        panelClass: 'snackbar-success',
        verticalPosition: 'top',
        horizontalPosition: 'right'
      }).afterOpened().subscribe(() => {
        this.submit.emit(this.form.value);
        this.payLoad = JSON.stringify(this.form.value);
        console.log('Saved the following values', this.payLoad);
      });
    }
  
    onCancel() {
      this.close.emit(null);
    }

}
