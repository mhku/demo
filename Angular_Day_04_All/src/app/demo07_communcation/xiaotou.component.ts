import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'xiaotou',
    template: `
        <h1>这是父组件</h1>
        <datou 
        (toFatherEvent)="rcvMsg($event)"
        [myValue]="treasure">
        <datou>
    `
})

export class XiaoTouComponent implements OnInit {
    treasure:string = "传家宝";
    constructor() { }

    ngOnInit() { }

    rcvMsg(msg:any){
        console.log('儿子传来的信息是'+msg);
    }
}