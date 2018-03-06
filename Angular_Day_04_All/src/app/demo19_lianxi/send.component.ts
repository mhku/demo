import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'send',
    template: `
        <h1>商品发货页面</h1>
        <button (click)="checkProduct()">
            查看商品
        </button>
        <a routerLink="adsfjk">Test</a>
    `
})

export class SendComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    checkProduct(){
            //跳转到check
            this.myRouter.navigateByUrl('');
    }
}