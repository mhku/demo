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

@NgModule({
  providers:[MyHttpService],
  imports:      [ 
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserModule 
    ],
  declarations: [
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
 