import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IFiltro } from '@models/filter.model';
import { Observable } from 'rxjs';
// import { QuestionBase } from 'src/app/utils/form-select';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [  ]
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  selectedOption!: Observable<IFiltro[]>;
  fields = [
    { name: 'facultativo', type: 'autocomplete-select', options: []},
    { name: 'fec_registro', type: 'autocomplete-select', options: []},
    { name: 'frDesde', type: 'autocomplete-select', options: []},
    { name: 'frHasta', type: 'autocomplete-select', options: []},
    { name: 'asegurado', type: 'autocomplete-select', options: []},
    { name: 'cedente', type: 'autocomplete-select', options: []},
    { name: 'corredor', type: 'autocomplete-select', options: []},
    { name: 'domicilio', type: 'autocomplete-select', options: []},
    { name: 'moneda', type: 'autocomplete-select', options: []},
    { name: 'grupo_ramo', type:'autocomplete-select', options: []},
    { name: 'ramo', type: 'autocomplete-select', options: []},
    { name: 'contrato', type: 'autocomplete-select', options: []},
    { name: 'negocio', type: 'autocomplete-select', options: []},
    { name: 'indole', type: 'autocomplete-select', options: []},
    { name: 'estado', type: 'autocomplete-select', options: []},
    { name: 'usuario_registrado', type: 'autocomplete-select', options: []},
    { name: 'nro_facultativo', type: 'autocomplete-select', options: []},
    { name: 'nrofa_especitifico', type: 'autocomplete-select', options: []}
  ];

  onOptionSelected(option: Observable<IFiltro[]>) {
    this.selectedOption = option;
  }
  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({});

    this.fields.forEach(field => {
      this.form.addControl(field.name, new FormControl(''));
    });
  }

  ngOnInit(): void {
    
  }


  // @Input() questions: QuestionBase<string>[] | null = [];
  // @Input() isDialog!: boolean;

  // @Output() close = new EventEmitter<any>();
  // @Output() submit = new EventEmitter<any>();

  // form!: FormGroup;
  // payLoad = '';

  // constructor(
  //   private qcs: QuestioncontrolService,
  //   private _snackBar: MatSnackBar) {  }

  //   ngOnInit() {
  //     this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  //   }
  
  //   onSubmit() {
  //     this._snackBar.open(`Saved Successfully`, '', {
  //       duration: 2000,
  //       panelClass: 'snackbar-success',
  //       verticalPosition: 'top',
  //       horizontalPosition: 'right'
  //     }).afterOpened().subscribe(() => {
  //       this.submit.emit(this.form.value);
  //       this.payLoad = JSON.stringify(this.form.value);
  //       console.log('Saved the following values', this.payLoad);
  //     });
  //   }
  
  //   onCancel() {
  //     this.close.emit(null);
  //   }

 

}
