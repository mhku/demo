import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'orderConfirm',
    template: `
        <h1>这是订单确认页面</h1>
    `
})

export class OrderConfirmComponent implements OnInit {
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() {
        this.myAR.params.subscribe((result)=>{
            console.log(result);
        });
     }
}