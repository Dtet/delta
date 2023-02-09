import { DataService } from './../../services/data.service';
import { IFiltro } from './../../../models/filter.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  datos: IFiltro[] = []
  filtro = new FormGroup({
    facultativo: new FormControl(''),
    fec_registro: new FormControl(''),
    frDesde: new FormControl(''),
    frHasta: new FormControl(''),
    asegurado: new FormControl(''),
    cedente: new FormControl(''),
    corredor: new FormControl(''),
    domicilio: new FormControl(''),
    moneda: new FormControl(''),
    grupo_ramo: new FormControl(''),
    ramo: new FormControl(''),
    contrato: new FormControl(''),
    negocio: new FormControl(''),
    indole: new FormControl(''),
    estado: new FormControl(''),
    usuario_registrado: new FormControl(''),
    nro_facultativo: new FormControl(''),
    nrofa_especifico: new FormControl('')
  });
  subs: any;
  options: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.subs.add(this.dataService.getInfo().subscribe(data => {
    //   this.options = data;
    // }));
  }

}
