import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service'
import {HeartBeatService} from './heartbeat.service'

// 如果用户已登录：下午好！
// 如果用户未登录：请去登录
@Component({
    selector: 'demo12',
    // providers:[UserService],
    template: `
        <h1>service example</h1>
        <p>
    {{isUserLogin?'下午好！':'请去登录'}}
        </p>
        <button (click)="start()">开始心跳</button>
        <button (click)="stop()">结束心跳</button>
    `
})

export class Demo12Component implements OnInit {
    isUserLogin:boolean = false;
    //在构造函数中完成服务类的实例化
    constructor(
        private myService:UserService,
        private myHBS:HeartBeatService) { }

    ngOnInit() {
        //希望在组件初始化之后，就去调用服务中的方法
        this.isUserLogin 
        = this.myService.checkUserLogin();
     }

     start(){
         this.myHBS.startHearBeat();
     };
     stop(){
         this.myHBS.stopHeartBeat();
     }

}