import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from '@modules/facultativo/pages/tabla/tabla.component';


const routes: Routes = [
  {
    path: '',
    component: TablaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
