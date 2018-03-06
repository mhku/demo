import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Location} from '@angular/common'

@Component({
    selector: 'main',
    template: `
            <h1>这是主页面</h1>
            <button (click)="jumpToPerson()">
                查看个人中心
            </button>
            <button (click)="backToPre()">
                返回上一页
            </button>
        `
})

export class MainComponent implements OnInit {
    constructor(
        private myRouter:Router,
        private myLocation:Location
        ) { }

    ngOnInit() { }
    //返回上一页
    backToPre(){
        this.myLocation.back();
    }

    jumpToPerson(){
        this.myRouter.navigateByUrl('myPerson');
    }
}