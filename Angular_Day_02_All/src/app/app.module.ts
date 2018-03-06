import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

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

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule 
    ],
  declarations: [
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
