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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var demo01_component_1 = require('./demo01/demo01.component');
var demo02_component_1 = require('./demo02/demo02.component');
var demo03_component_1 = require('./demo03_for/demo03.component');
var demo04_component_1 = require('./demo04_lianxi/demo04.component');
var demo05_component_1 = require('./demo05_directive/demo05.component');
var demo06_component_1 = require('./demo06_custom_directive/demo06.component');
var test_directive_1 = require('./demo06_custom_directive/test.directive');
var xiaotou_component_1 = require('./demo07_communcation/xiaotou.component');
var datou_component_1 = require('./demo07_communcation/datou.component');
var chatroom_component_1 = require('./demo08_lianxi/chatroom.component');
var user_component_1 = require('./demo08_lianxi/user.component');
var demo09_component_1 = require('./demo09_bind/demo09.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            declarations: [
                demo09_component_1.Demo09Component,
                chatroom_component_1.ChatRoomComponent,
                user_component_1.UserComponent,
                xiaotou_component_1.XiaoTouComponent,
                datou_component_1.DaTouComponent,
                test_directive_1.TestDirective,
                demo06_component_1.Demo06Component,
                demo05_component_1.Demo05Component,
                demo04_component_1.Demo04Component,
                demo03_component_1.Demo03Component,
                demo02_component_1.Demo02Component,
                demo01_component_1.Demo01Component,
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map