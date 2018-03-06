import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'outbox',
    template: `
        <h1>这是发件箱</h1>
        <ul>
            <li>已发邮件1</li>
            <li>已发邮件2</li>
            <li>已发邮件3</li>
        </ul>
    `
})

export class OutboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}