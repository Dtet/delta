import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() isDialog: boolean;

  @Output() close = new EventEmitter<any>();
  @Output() submit = new EventEmitter<any>();

  form: FormGroup;
  payLoad = '';

  constructor(
    private qcs: QuestionControlService,
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
