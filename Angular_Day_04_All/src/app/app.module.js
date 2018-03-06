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
var http_1 = require('@angular/http');
// import {RouterModule} from '@angular/router'
var app_router_1 = require('./app.router');
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
var demo10_component_1 = require('./demo10_lianxi/demo10.component');
var demo11_component_1 = require('./demo11_pipe/demo11.component');
var test_pipe_1 = require('./demo11_pipe/test.pipe');
var sex_pipe_1 = require('./demo11_pipe/sex.pipe');
var demo12_component_1 = require('./demo12_service/demo12.component');
var user_service_1 = require('./demo12_service/user.service');
var heartbeat_service_1 = require('./demo12_service/heartbeat.service');
var demo13_component_1 = require('./demo13_http/demo13.component');
var myhttp_service_1 = require('./demo13_http/myhttp.service');
var demo14_component_1 = require('./demo14_lianxi/demo14.component');
var storehttp_service_1 = require('./demo14_lianxi/storehttp.service');
var login_component_1 = require('./demo15_spa/login.component');
var register_component_1 = require('./demo15_spa/register.component');
var person_component_1 = require('./demo16_lianxi/person.component');
var main_component_1 = require('./demo16_lianxi/main.component');
var notfound_component_1 = require('./demo16_lianxi/notfound.component');
var cart_component_1 = require('./demo17_args/cart.component');
var orderconfirm_component_1 = require('./demo17_args/orderconfirm.component');
var mylogin_component_1 = require('./demo18_embed/mylogin.component');
var mail_component_1 = require('./demo18_embed/mail.component');
var inbox_component_1 = require('./demo18_embed/inbox.component');
var outbox_component_1 = require('./demo18_embed/outbox.component');
var canenter_service_1 = require('./demo18_embed/canenter.service');
var check_component_1 = require('./demo19_lianxi/check.component');
var pay_component_1 = require('./demo19_lianxi/pay.component');
var send_component_1 = require('./demo19_lianxi/send.component');
var demo20_component_1 = require('./demo20_carousel/demo20.component');
var carousel_component_1 = require('./demo20_carousel/carousel.component');
var slide_component_1 = require('./demo20_carousel/slide.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                canenter_service_1.MailGuard,
                myhttp_service_1.MyHttpService,
                user_service_1.UserService,
                heartbeat_service_1.HeartBeatService,
                storehttp_service_1.StoreHttpService
            ],
            imports: [
                // RouterModule,
                app_router_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            declarations: [
                carousel_component_1.Carousel,
                slide_component_1.Slide,
                demo20_component_1.Demo20Component,
                check_component_1.CheckComponent,
                pay_component_1.PayComponent,
                send_component_1.SendComponent,
                mylogin_component_1.MyLoginComponent,
                mail_component_1.MailComponent,
                inbox_component_1.InboxComponent,
                outbox_component_1.OutboxComponent,
                cart_component_1.CartComponent,
                orderconfirm_component_1.OrderConfirmComponent,
                notfound_component_1.NotFoundComponent,
                person_component_1.PersonComponent,
                main_component_1.MainComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                demo14_component_1.Demo14Component,
                demo13_component_1.Demo13Component,
                demo12_component_1.Demo12Component,
                sex_pipe_1.SexPipe,
                test_pipe_1.TestPipe,
                demo11_component_1.Demo11Component,
                demo10_component_1.Demo10Component,
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