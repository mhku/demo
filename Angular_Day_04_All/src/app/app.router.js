// a-module-routing
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
var router_1 = require('@angular/router');
var login_component_1 = require('./demo15_spa/login.component');
var register_component_1 = require('./demo15_spa/register.component');
var person_component_1 = require('./demo16_lianxi/person.component');
var main_component_1 = require('./demo16_lianxi/main.component');
var notfound_component_1 = require('./demo16_lianxi/notfound.component');
var orderconfirm_component_1 = require('./demo17_args/orderconfirm.component');
var mail_component_1 = require('./demo18_embed/mail.component');
var inbox_component_1 = require('./demo18_embed/inbox.component');
var outbox_component_1 = require('./demo18_embed/outbox.component');
var canenter_service_1 = require('./demo18_embed/canenter.service');
var pay_component_1 = require('./demo19_lianxi/pay.component');
var send_component_1 = require('./demo19_lianxi/send.component');
var demo20_component_1 = require('./demo20_carousel/demo20.component');
var routes = [
    { path: '', component: demo20_component_1.Demo20Component },
    { path: 'myPay/:price', component: pay_component_1.PayComponent },
    { path: 'mySend', component: send_component_1.SendComponent },
    {
        path: 'mail',
        canActivate: [canenter_service_1.MailGuard],
        component: mail_component_1.MailComponent,
        children: [
            { path: '', component: inbox_component_1.InboxComponent },
            { path: 'outbox', component: outbox_component_1.OutboxComponent },
            { path: '**', component: notfound_component_1.NotFoundComponent }
        ]
    },
    {
        path: 'myOC/:price', component: orderconfirm_component_1.OrderConfirmComponent
    },
    { path: 'myMain', component: main_component_1.MainComponent },
    { path: 'myPerson', component: person_component_1.PersonComponent },
    { path: 'myLogin', component: login_component_1.LoginComponent },
    { path: 'myRegister', component: register_component_1.RegisterComponent },
    { path: '**', component: notfound_component_1.NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.router.js.map