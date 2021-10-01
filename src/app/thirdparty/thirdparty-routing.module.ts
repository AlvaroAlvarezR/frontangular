import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  { path: 'thirdparty', redirectTo: 'thirdparty/index', pathMatch: 'full'},
  { path: 'thirdparty/index', component: IndexComponent },
  { path: 'thirdparty/create', component: CreateComponent },
  { path: 'thirdparty/edit/:thirdparty', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdpartyRoutingModule { }
