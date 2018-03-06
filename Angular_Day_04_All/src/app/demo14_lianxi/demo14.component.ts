import { Component, OnInit } from '@angular/core';
import {StoreHttpService} from './storehttp.service'

@Component({
    selector: 'demo14',
    template: `
        <button (click)="loadData()">
            clickme
        </button>
        <ul>
            <li *ngFor="let tmp of list">
                {{tmp.title}}
            </li>
        </ul>
    `
})

export class Demo14Component implements OnInit {

    //定义一个数组，保存result.data中的数据
    list:Array<any> = [];

    constructor(private myHS:StoreHttpService) { }

    ngOnInit() { }

    loadData(){
        this.myHS.sendGet('http://localhost/admin/data/product_list.php')
        .subscribe((result)=>{
            this.list = result.data;
        })
    }
}