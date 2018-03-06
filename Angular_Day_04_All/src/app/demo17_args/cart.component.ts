import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'cart',
    template: `
        <h1>这是购物车页面</h1>
        <button (click)="handleClick()">
            去结算
        </button>
        <a routerLink="/myOC/345">去结算</a>
    `
})

export class CartComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }

    handleClick(){
        this.myRouter.navigateByUrl('myOC/123');
    }





}