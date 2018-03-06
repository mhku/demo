// a-module-routing

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './demo15_spa/login.component';
import {RegisterComponent} from './demo15_spa/register.component'
import {PersonComponent} from './demo16_lianxi/person.component'
import {MainComponent} from './demo16_lianxi/main.component'
import {NotFoundComponent} from './demo16_lianxi/notfound.component'
import {CartComponent} from './demo17_args/cart.component'
import {OrderConfirmComponent} from './demo17_args/orderconfirm.component'
import {MyLoginComponent} from './demo18_embed/mylogin.component'
import {MailComponent} from './demo18_embed/mail.component'
import {InboxComponent} from './demo18_embed/inbox.component'
import {OutboxComponent} from './demo18_embed/outbox.component'
import {MailGuard} from './demo18_embed/canenter.service'
import {CheckComponent} from './demo19_lianxi/check.component'
import {PayComponent} from './demo19_lianxi/pay.component'
import {SendComponent} from './demo19_lianxi/send.component'
import {Demo20Component} from './demo20_carousel/demo20.component'

const routes: Routes = [
  { path: '', component: Demo20Component },
  { path: 'myPay/:price',component:PayComponent},
  { path: 'mySend',component:SendComponent},
  { 
      path: 'mail',
      canActivate:[MailGuard],
      component:MailComponent,
      children:[
        {path:'',component:InboxComponent},
        {path:'outbox',component:OutboxComponent},
        {path:'**',component:NotFoundComponent}
      ]
  },
  { 
    path: 'myOC/:price',component:OrderConfirmComponent
  },
  { path: 'myMain',component:MainComponent},
  { path: 'myPerson',component:PersonComponent},
  { path: 'myLogin',component:LoginComponent},
  { path: 'myRegister',component:RegisterComponent},
  { path: '**' ,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
