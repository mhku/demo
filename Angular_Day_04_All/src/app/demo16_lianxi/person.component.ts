import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'person',
    template: `
            <h1>这是个人中心页面</h1>
            <a routerLink="/myMain">
                查看主页面
            </a>
        `
})

export class PersonComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}