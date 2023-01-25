import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { IFacultativo } from '@models/facultativo.model';
import { FacultativoService } from '@shared/services/facultativo.service';
import facultativoListAdapter from 'src/app/utils/orden';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

const headerNames: { [key: string]: string } = {
  cdCedente: 'Código de Cedente',
  cdCorredor: 'Código de Corredor',
  grupoRamo: 'Grupo Ramo',
  cdRamo: 'Código de Ramo',
  cdIndole: 'Código de Indole',
  cdMoneda: 'Código de Moneda',
  cdTpFacultativo: 'Código tipo de Facultativo',
  cdTpNegocio: 'Código tipo de Negocio',
  cdEstado: 'Código de Estado',
  usrRegistro: 'Usuario',
  cedente: 'Cedente',
  corredor: 'Corredor',
  indole: 'Indole',
  poliza: 'Poliza',
  moneda: 'Moneda'
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
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '800px',
        data: {name: this.name},
      });

      dialogRef.afterClosed().subscribe( result => {
        console.log('cerrado');
        this.name = result;
      })
    }
  
  ngOnInit(): void {
    this.facultativoServicio.getData()
      .subscribe((resp) => {
        const { formattedData, keys } = facultativoListAdapter(
          resp.result.data.listado
        );
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
