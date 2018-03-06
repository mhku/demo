import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo11',
    templateUrl: './demo11.component.html'
})

export class Demo11Component implements OnInit {
    stuName:string = "Wentworth Miller";
    nowDate = new Date();
    totalPrice = 123.456789;
    constructor() { }

    ngOnInit() { }
}