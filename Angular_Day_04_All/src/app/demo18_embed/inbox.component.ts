import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'inbox',
    template: `
        <h1>收件箱</h1>
        <ul>
            <li>已读邮件1</li>
            <li>已读邮件2</li>
            <li>已读邮件3</li>
        </ul>
    `
})

export class InboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}