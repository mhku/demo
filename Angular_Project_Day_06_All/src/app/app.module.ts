import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app.router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import {LoginComponent} from 
'./login/login.component'
import {IndexComponent} from './index/index.component'
import {NotFoundComponent} from './utility/notFound/notfound.component'
import {HeaderComponent} from './utility/header/header.component'
import {MyHttpService} from './utility/service/myhttp.service'
import {FooterComponent} from './utility/footer/footer.component'
import {Carousel} from './utility/carousel/carousel.component'
import {Slide} from './utility/carousel/slide.component'
import {ListComponent} from './list/list.component'
import {CartComponent} from './cart/cart.component'
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component'
import {orderConfirmStepOneComponent} from './orderConfirm/orderConfirmStepOne.component'
import {orderConfirmStepTwoComponent} from './orderConfirm/orderConfirmStepTwo.component'
import {orderConfirmStepThreeComponent} from './orderConfirm/orderConfirmStepThree.component'

@NgModule({
  providers:[MyHttpService],
  imports:      [ 
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserModule 
    ],
  declarations: [
    orderConfirmStepOneComponent,
    orderConfirmStepTwoComponent,
    orderConfirmStepThreeComponent,
    OrderConfirmComponent,
    CartComponent,
    ListComponent,
    Carousel,
    Slide,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    IndexComponent,
    LoginComponent, 
    AppComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 