import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    answer:string='a';
    imgName:string='1.jpg';
    uName:string="zhangsan";

    //构造函数 简单的数据初始化
    constructor() { 
        console.log('在构造函数中...');
    }

    //复杂的数据初始化
    ngOnInit() {
        console.log('组件正在初始化');
     }

    //按钮按下时处理函数
    handleClick(){
        console.log('按钮被按下了');
    }

    //当双向数据绑定的数据发生变化时
    handleModelChange(msg:any){
        console.log(msg)
        console.log(this.uName);
    }
}