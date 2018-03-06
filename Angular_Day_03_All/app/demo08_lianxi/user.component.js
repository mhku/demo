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
var UserComponent = (function () {
    function UserComponent() {
        this.userMsg = "";
        this.uname = "";
        this.addEvent = new core_1.EventEmitter();
    }
    UserComponent.prototype.ngOnInit = function () { };
    //发送消息给聊天室
    UserComponent.prototype.sendToChatroom = function () {
        //触发事件并发送数据
        //hello mike --> lucy:hello mike
        var msg = this.uname + ":" + this.userMsg;
        this.addEvent
            .emit(msg);
        this.userMsg = "";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserComponent.prototype, "uname", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserComponent.prototype, "addEvent", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n        <span>{{uname+\":\"}}</span>\n        <input type=\"text\"\n             [(ngModel)]=\"userMsg\"/> \n        <button \n        (click)=\"sendToChatroom()\">\u53D1\u9001</button>\n        <br/>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map