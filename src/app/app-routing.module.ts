import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  { path: '',             component: CreateComponent },
  { path: 'create',       component: CreateComponent },
  { path: 'history',      component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
