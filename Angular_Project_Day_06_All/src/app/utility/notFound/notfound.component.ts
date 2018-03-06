import { Component, OnInit,OnDestroy } from '@angular/core';
import {Location} from '@angular/common'

@Component({
    selector: 'notFound',
    templateUrl: './notfound.component.html'
})

export class NotFoundComponent implements OnInit,OnDestroy {
    count:number = 5;
    myTimer:any = null;

    constructor(private myLocation:Location) { }

    ngOnInit() {
        this.myTimer = setInterval(()=>{
            // 数字自减操作
            this.count--;
            // 超过临界值，结束定时器，并跳转到上一页
            if(this.count == 1){
                clearInterval(this.myTimer);
                this.myLocation.back();
                this.myTimer = null;
            }
        },1000)
     }

    ngOnDestroy(){
        //结束定时器
        if(this.myTimer){
            clearInterval(this.myTimer)
            this.myTimer = null;
        }
        
    }
}