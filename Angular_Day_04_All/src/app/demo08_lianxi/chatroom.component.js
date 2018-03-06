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
var ChatRoomComponent = (function () {
    function ChatRoomComponent() {
        this.list = [];
    }
    ChatRoomComponent.prototype.ngOnInit = function () { };
    //定义一个带有参数的方法
    ChatRoomComponent.prototype.rcvMsg = function (msg) {
        console.log('父组件接收到的数据是' + msg);
        this.list.push(msg);
    };
    ChatRoomComponent = __decorate([
        core_1.Component({
            selector: 'chatroom',
            template: "\n        <ul>\n            <li \n            *ngFor=\"let tmp of list\">\n                {{tmp}}\n            </li>\n        </ul>\n        <user \n         (addEvent)=\"rcvMsg($event)\"\n         uname=\"lucy\"></user>\n        <user \n         (addEvent)=\"rcvMsg($event)\"\n         uname=\"mike\"></user>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());
exports.ChatRoomComponent = ChatRoomComponent;
//# sourceMappingURL=chatroom.component.js.map