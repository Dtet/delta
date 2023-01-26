import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestioncontrolService } from '@shared/services/questioncontrol.service';
import { QuestionBase } from 'src/app/utils/form-select';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [ QuestioncontrolService ]
})
export class DialogComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  constructor(
    private qcs: QuestioncontrolService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
    // public dialogRef: MatDialogRef<DialogComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { this.questions = this.data.questions; }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
  ngOnInit(): void {
      
  }
  closeDialog() {
    this.dialogRef.close();
  }

}

export interface IDialogData {
  questions: QuestionBase<any>[]
}
