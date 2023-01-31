import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './pages/tabla/tabla.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultativoRoutingModule { }
