import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppComponent }  from './app.component';
import {Demo01Component} from './demo01/demo01.component'
import {Demo02Component} from './demo02/demo02.component'
import {Demo03Component} from './demo03_for/demo03.component'
import {Demo04Component} from './demo04_lianxi/demo04.component'
import {Demo05Component} from './demo05_directive/demo05.component'
import {Demo06Component} from './demo06_custom_directive/demo06.component'
import {TestDirective} from './demo06_custom_directive/test.directive'
import {XiaoTouComponent} from './demo07_communcation/xiaotou.component'
import {DaTouComponent} from './demo07_communcation/datou.component'
import {ChatRoomComponent} from './demo08_lianxi/chatroom.component'
import {UserComponent} from './demo08_lianxi/user.component'
import {Demo09Component} from './demo09_bind/demo09.component'
import {Demo10Component} from './demo10_lianxi/demo10.component'
import {Demo11Component} from './demo11_pipe/demo11.component'
import {TestPipe} from './demo11_pipe/test.pipe'
import {SexPipe} from './demo11_pipe/sex.pipe'
import {Demo12Component} from './demo12_service/demo12.component'
import {UserService} from './demo12_service/user.service'
import {HeartBeatService} from './demo12_service/heartbeat.service'
import {Demo13Component} from './demo13_http/demo13.component'
import {MyHttpService} from './demo13_http/myhttp.service'
import {Demo14Component} from './demo14_lianxi/demo14.component'
import {StoreHttpService} from './demo14_lianxi/storehttp.service'

@NgModule({
  providers:[
      MyHttpService,
      UserService,
      HeartBeatService,
      StoreHttpService
      ],
  imports:      [
    HttpModule,
    FormsModule,
    BrowserModule 
    ],
  declarations: [
    Demo14Component,
    Demo13Component,
    Demo12Component,
    SexPipe,
    TestPipe,
    Demo11Component,
    Demo10Component,
    Demo09Component,
    ChatRoomComponent,
    UserComponent,
    XiaoTouComponent,
    DaTouComponent,
    TestDirective,
    Demo06Component,
    Demo05Component,
    Demo04Component,
    Demo03Component,
    Demo02Component,
    Demo01Component, 
    AppComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
