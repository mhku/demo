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
var user_service_1 = require('./user.service');
var heartbeat_service_1 = require('./heartbeat.service');
// 如果用户已登录：下午好！
// 如果用户未登录：请去登录
var Demo12Component = (function () {
    //在构造函数中完成服务类的实例化
    function Demo12Component(myService, myHBS) {
        this.myService = myService;
        this.myHBS = myHBS;
        this.isUserLogin = false;
    }
    Demo12Component.prototype.ngOnInit = function () {
        //希望在组件初始化之后，就去调用服务中的方法
        this.isUserLogin
            = this.myService.checkUserLogin();
    };
    Demo12Component.prototype.start = function () {
        this.myHBS.startHearBeat();
    };
    ;
    Demo12Component.prototype.stop = function () {
        this.myHBS.stopHeartBeat();
    };
    Demo12Component = __decorate([
        core_1.Component({
            selector: 'demo12',
            // providers:[UserService],
            template: "\n        <h1>service example</h1>\n        <p>\n    {{isUserLogin?'\u4E0B\u5348\u597D\uFF01':'\u8BF7\u53BB\u767B\u5F55'}}\n        </p>\n        <button (click)=\"start()\">\u5F00\u59CB\u5FC3\u8DF3</button>\n        <button (click)=\"stop()\">\u7ED3\u675F\u5FC3\u8DF3</button>\n    "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, heartbeat_service_1.HeartBeatService])
    ], Demo12Component);
    return Demo12Component;
}());
exports.Demo12Component = Demo12Component;
//# sourceMappingURL=demo12.component.js.map