import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'user',
    template: `
        <span>{{uname+":"}}</span>
        <input type="text"
             [(ngModel)]="userMsg"/> 
        <button 
        (click)="sendToChatroom()">发送</button>
        <br/>
    `
})

export class UserComponent implements OnInit {
    userMsg:string = "";
    @Input() uname="";
    @Output() addEvent = 
        new EventEmitter();
    constructor() { }

    ngOnInit() { }
    //发送消息给聊天室
    sendToChatroom(){
        //触发事件并发送数据
        //hello mike --> lucy:hello mike
        let msg = 
         this.uname+":"+this.userMsg
    
        this.addEvent
        .emit(msg);
        this.userMsg="";

    }
}