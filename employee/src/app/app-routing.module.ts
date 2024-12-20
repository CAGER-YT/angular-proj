import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './upate/update.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
  {path: 'view-list', component: ViewListComponent},
  {path: 'view/:id', component: ViewComponent },
  {path: 'view', component: ViewComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: UpdateComponent},
  {path: '', redirectTo: '/view-list', pathMatch: 'full'},
  {path: 'delete/:id',component:DeleteComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
