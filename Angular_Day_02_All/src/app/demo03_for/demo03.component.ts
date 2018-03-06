import {Component} from '@angular/core'

@Component({
    selector:'demo03',
    template:`
        <h1>这是demo03</h1>
        <ul>
            <ng-container *ngFor="let tmp of list;let myIndex=index" >
            <li 
           *ngIf="myIndex<2"
            >

                {{"index is"+myIndex+" value is"+tmp}}

            </li>
            </ng-container>
        </ul>
        <p *ngIf="isMember">仅会员可见</p>
    `
})

export class Demo03Component{
    /*
         ts 指定数据类型
         count:number = 1
         hasMore:boolean = true
    */
    list:Array<any>=[100,200,300];
    isMember:boolean = true;
    

}