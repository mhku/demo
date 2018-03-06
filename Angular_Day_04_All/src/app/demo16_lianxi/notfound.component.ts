import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Location} from '@angular/common'

@Component({
    selector: 'notFound',
    template: `
        <p>404 page not found</p>
        <h2>{{count+"s 自动返回上一页"}}</h2>
    `
})

export class NotFoundComponent implements OnInit,OnDestroy {
    count:number = 5;
    timer:any = null;
    constructor(private myLocation:Location) { }

    ngOnDestroy(){
        // 清理工作，比如结束定时器
        clearInterval(this.timer);
    }

    ngOnInit() { 
        this.timer = setInterval(()=>{
            this.count--;
            if(this.count == 1){
                //结束定时器
                clearInterval(this.timer);
                //返回上一页
                this.myLocation.back();

            }
        },1000)
    }
}