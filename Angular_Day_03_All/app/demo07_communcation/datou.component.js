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
var DaTouComponent = (function () {
    function DaTouComponent() {
        // 通过Input指定可以接收哪些属性？？
        this.myValue = "";
        // 通过Output指定一个事件触发器
        this.toFatherEvent = new core_1.EventEmitter();
    }
    DaTouComponent.prototype.ngOnInit = function () { };
    //与父组件的通信：‘什么传家宝？是钱吗’
    DaTouComponent.prototype.askFather = function () {
        this.toFatherEvent
            .emit('什么传家宝？是钱吗');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DaTouComponent.prototype, "myValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DaTouComponent.prototype, "toFatherEvent", void 0);
    DaTouComponent = __decorate([
        core_1.Component({
            selector: 'datou',
            template: "\n        <h3>\u8FD9\u662F\u5B50\u7EC4\u4EF6</h3>\n        <p>{{\"\u7236\u7EC4\u4EF6\u4F20\u6765\u7684\u503C\"+myValue}}</p>\n        <button (click)=\"askFather()\">\n            \u95EE\u5019\n        </button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DaTouComponent);
    return DaTouComponent;
}());
exports.DaTouComponent = DaTouComponent;
//# sourceMappingURL=datou.component.js.map