import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Demo01Component} from './demo01/demo01.component'
import {Demo02Component} from './demo02/demo02.component'
import {Demo03Component} from './demo03_for/demo03.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    Demo03Component,
    Demo02Component,
    Demo01Component, 
    AppComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
