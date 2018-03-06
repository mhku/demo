import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chatroom',
    template: `
        <ul>
            <li 
            *ngFor="let tmp of list">
                {{tmp}}
            </li>
        </ul>
        <user 
         (addEvent)="rcvMsg($event)"
         uname="lucy"></user>
        <user 
         (addEvent)="rcvMsg($event)"
         uname="mike"></user>
    `
})

export class ChatRoomComponent implements OnInit {
    list:Array<any>=[];
    constructor() { }

    ngOnInit() { }
    //定义一个带有参数的方法
    rcvMsg(msg:string){
        console.log('父组件接收到的数据是'+msg);
        this.list.push(msg);
    }

}