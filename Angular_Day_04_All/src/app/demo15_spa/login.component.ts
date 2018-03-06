import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'login',
    template: `
        <h1>这是登录页面</h1>
        <button (click)="jumpToRegister()">
            没有账号，去注册
        </button>
        <a routerLink="/myRegister"> 
            去注册 
        </a>
    `
})
export class LoginComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }
    //跳转到注册页面
    jumpToRegister(){
        this.myRouter
            .navigateByUrl('myRegister');
    }
}