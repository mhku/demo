import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import {Demo01Component} from './demo01/demo01.component'
import {Demo02Component} from './demo02/demo02.component'
import {Demo03Component} from './demo03_for/demo03.component'
import {Demo04Component} from './demo04_lianxi/demo04.component'
import {Demo05Component} from './demo05_directive/demo05.component'

@NgModule({
  imports:      [
    FormsModule,
    BrowserModule 
    ],
  declarations: [
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
