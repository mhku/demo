import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'check',
    template: `
        <h1>商品查看页面</h1>
        <button (click)="jumpToPay()">去支付</button>
        <a [routerLink]="'myPay/'+productPrice">
            去支付
        </a>
    `
})

export class CheckComponent implements OnInit {
    productPrice:number = 100;

    constructor(private myRouter:Router) { }

    jumpToPay(){
        this.myRouter.navigateByUrl('myPay/123');
    }

    ngOnInit() { }
}