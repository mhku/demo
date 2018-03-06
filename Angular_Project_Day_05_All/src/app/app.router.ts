// a-module-routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {IndexComponent} from './index/index.component'
import {NotFoundComponent} from './utility/notFound/notfound.component'

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login',component:LoginComponent},
  { path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

