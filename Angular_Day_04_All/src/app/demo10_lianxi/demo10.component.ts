import { Component, OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'demo10',
    template: `
        <h1 [ngStyle]="{opacity:myOpacityValue}">
            这是Demo10
        </h1>
    `
})

export class Demo10Component implements OnInit ,OnDestroy{
    //定义一个保存透明度数据的变量
    myOpacityValue=0;
    myTimer:any = null;
    constructor() { }

    ngOnInit() {
        //启动定时器 在定时器中修改一个变量
        this.myTimer = setInterval(()=>{
            this.myOpacityValue+=0.1;
            if(this.myOpacityValue>1){
                this.myOpacityValue = 0;
            }
        },300)
     }

    ngOnDestroy(){
        // 组件销毁时，应该在此处理函数中完成清理工作
        clearInterval(this.myTimer);
    }

}