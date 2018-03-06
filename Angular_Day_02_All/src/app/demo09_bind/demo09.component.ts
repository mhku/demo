import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo09',
    template: `
        <button
         [ngClass]="{myHightlight:true}">
            clickme
        </button>
        <h1 
        [ngStyle]="{opacity:myOpacityValue}">透明度是动态绑定过来的</h1>
    `,
    styleUrls:['./test.css']
})

export class Demo09Component implements OnInit {
    myOpacityValue =0.2;
    constructor() { }

    ngOnInit() { }
}