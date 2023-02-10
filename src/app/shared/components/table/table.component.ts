import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { IFacultativo } from '@models/facultativo.model';
import { FacultativoService } from '@shared/services/facultativo.service';
import facultativoListAdapter from 'src/app/utils/orden';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

const headerNames: { [key: string]: string } = {
  asegurado: 'Asegurado',
  cdCedente: 'Código de Cedente',
  cdCorredor: 'Código de Corredor',
  cdDomicilio: 'Código de Domicilio',
  cdEstado: 'Código de Estado',
  cdFacultativo: 'Código de Facultativo',
  cdIndole: 'Código de Indole',
  cdMoneda: 'Código de Moneda',
  cdRamo: 'Código de Ramo',
  cdTpNegocio: 'Código tipo de Negocio',
  cdTpOcupacion: 'Código tipo de Ocupación',
  cedente: 'Cedente',
  corredor: 'Corredor',
  domicilio: 'Domicilio',
  estado: 'Estado',
  expediente: 'Expediente',
  feCiaDesde: 'Fecha Desde',
  feCiaHasta: 'Fecha Hasta',
  feRegistro: 'Fecha de Registro',
  idFacultativo: 'ID',
  indole: 'Indole',
  moneda: 'Moneda',
  poliza: 'Poliza',
  ramo: 'Ramo',
  ramoRenovable: 'Ramo Renovable',
  renovado: 'Renovado',
  serie: 'Serie',
  suscriptor: 'Suscriptor',
  tpFacultativo: 'Tipo de Facultativo',
  tpNegocio: 'Tipo de Negocio',
  tpOcupacion: 'Tipo de Ocupación',
  usrRegistro: 'Usuario',
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  columns = Object.entries(headerNames).map(([key, header]) => {
    return {
      columnDef: key,
      header,
      cell: (element: IFacultativo) => `${element[key]}`,
    };
  });
  dataSource = new MatTableDataSource<IFacultativo>([]);
  displayedColumns = this.columns.map((c) => c.columnDef);
  pageSizeOptions: number[] = [ 5, 10, 15 ];
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  
  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }

  name!: string; 

  constructor(
    private facultativoServicio: FacultativoService,
    public dialog: MatDialog
    ) { }

    openDialog(): void {
      const dialogRef = this.dialog.open(FormComponent, {
        width: '50%',
      })
      // const dialogRef = this.dialog.open(FormComponent, {
      //   width: '800px',
      //   data: {name: this.name},
      // });

      dialogRef.afterClosed().subscribe( result => {
        console.log('cerrado');
        
      })
    }
  
  ngOnInit(): void {
    this.facultativoServicio.getData()
      .subscribe((resp) => {
        const { formattedData, keys } = facultativoListAdapter(
          resp.result.data.listado
        );
        console.log(resp.result.data.listado)
        this.dataSource.data = formattedData;
        this.columns = keys.map((key) => ({
          columnDef: key,
          header: headerNames[key],
          cell: (element: IFacultativo) => `${element[key]}`,
        }));
        this.displayedColumns = this.columns.map((c) => c.columnDef);
      },
      (err) => {
        console.log(err);
        
      }
      );
  }

}
