// a-module-routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {IndexComponent} from './index/index.component'
import {NotFoundComponent} from './utility/notFound/notfound.component'
import {ListComponent} from './list/list.component'
import {CartComponent} from './cart/cart.component'
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component'
import {orderConfirmStepOneComponent} from './orderConfirm/orderConfirmStepOne.component'
import {orderConfirmStepTwoComponent} from './orderConfirm/orderConfirmStepTwo.component'
import {orderConfirmStepThreeComponent} from './orderConfirm/orderConfirmStepThree.component'



const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login',component:LoginComponent},
  { path: 'list',component:ListComponent},
  { path: 'cart',component:CartComponent},
  { 
    path: 'orderConfirm',component:OrderConfirmComponent,
    children:[
      {path:'',component:orderConfirmStepOneComponent},
      {path:'stepTwo',component:orderConfirmStepTwoComponent},
      {
        path:'stepThree',
        component:orderConfirmStepThreeComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ]
  },
  { path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

