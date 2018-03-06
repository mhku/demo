"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Demo03Component = (function () {
    function Demo03Component() {
        /*
             ts 指定数据类型
             count:number = 1
             hasMore:boolean = true
        */
        this.list = [100, 200, 300];
        this.isMember = true;
    }
    Demo03Component = __decorate([
        core_1.Component({
            selector: 'demo03',
            template: "\n        <h1>\u8FD9\u662Fdemo03</h1>\n        <ul>\n            <ng-container *ngFor=\"let tmp of list;let myIndex=index\" >\n            <li \n           *ngIf=\"myIndex<2\"\n            >\n\n                {{\"index is\"+myIndex+\" value is\"+tmp}}\n\n            </li>\n            </ng-container>\n        </ul>\n        <p *ngIf=\"isMember\">\u4EC5\u4F1A\u5458\u53EF\u89C1</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo03Component);
    return Demo03Component;
}());
exports.Demo03Component = Demo03Component;
//# sourceMappingURL=demo03.component.js.map