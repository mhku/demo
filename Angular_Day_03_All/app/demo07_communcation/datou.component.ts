import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'datou',
    template: `
        <h3>这是子组件</h3>
        <p>{{"父组件传来的值"+myValue}}</p>
        <button (click)="askFather()">
            问候
        </button>
    `
})
export class DaTouComponent implements OnInit {
    // 通过Input指定可以接收哪些属性？？
    @Input() myValue:any="";

    // 通过Output指定一个事件触发器
    @Output() toFatherEvent = 
        new EventEmitter();

    constructor() { }

    ngOnInit() { }
    //与父组件的通信：‘什么传家宝？是钱吗’
    askFather(){
        this.toFatherEvent
            .emit('什么传家宝？是钱吗');
    }
}






