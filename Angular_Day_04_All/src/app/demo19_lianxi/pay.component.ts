import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'pay',
    template: `
        <h1>商品支付页面 价格为{{myPrice}}</h1>
        <a routerLink="/mySend">
            支付完成，去发货
        </a>
    `
})

export class PayComponent implements OnInit {
    myPrice:number = 0;
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() {
        this.myAR.params.subscribe((result)=>{
            this.myPrice = result.price
        })
     }
}