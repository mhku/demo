import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo06',
    template: '<h1 test="123">这是自定义指令demo</h1>'
})

export class Demo06Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}