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
var XiaoTouComponent = (function () {
    function XiaoTouComponent() {
        this.treasure = "传家宝";
    }
    XiaoTouComponent.prototype.ngOnInit = function () { };
    XiaoTouComponent.prototype.rcvMsg = function (msg) {
        console.log('儿子传来的信息是' + msg);
    };
    XiaoTouComponent = __decorate([
        core_1.Component({
            selector: 'xiaotou',
            template: "\n        <h1>\u8FD9\u662F\u7236\u7EC4\u4EF6</h1>\n        <datou \n        (toFatherEvent)=\"rcvMsg($event)\"\n        [myValue]=\"treasure\">\n        <datou>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], XiaoTouComponent);
    return XiaoTouComponent;
}());
exports.XiaoTouComponent = XiaoTouComponent;
//# sourceMappingURL=xiaotou.component.js.map