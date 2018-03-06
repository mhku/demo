import { Component, OnInit } from '@angular/core';
import {MyHttpService} from './myhttp.service'

@Component({
    selector: 'demo13',
    template: `
        <h2>http</h2>
        <button (click)="handleClick()">
            clickMe
        </button>
    `
})

export class Demo13Component implements OnInit {
    constructor(private myHS:MyHttpService) { }

    ngOnInit() { }

    handleClick(){
        //从服务器端获取数据
        this.myHS.sendRequest("http://localhost/admin/data/product_list.php")
        .subscribe((result)=>{
            console.log(result);
        })
    }
}