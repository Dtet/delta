import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultativoRoutingModule } from './facultativo-routing.module';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TablaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FacultativoRoutingModule,
    SharedModule
  ]
})
export class FacultativoModule { }
