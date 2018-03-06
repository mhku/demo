import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mylogin',
    template: `
        <h1>这是登录页面</h1>
        <a routerLink="/mail">登录</a>
    `
})

export class MyLoginComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}