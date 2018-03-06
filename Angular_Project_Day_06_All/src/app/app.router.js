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
// a-module-routing
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var index_component_1 = require('./index/index.component');
var notfound_component_1 = require('./utility/notFound/notfound.component');
var list_component_1 = require('./list/list.component');
var cart_component_1 = require('./cart/cart.component');
var orderConfirm_component_1 = require('./orderConfirm/orderConfirm.component');
var orderConfirmStepOne_component_1 = require('./orderConfirm/orderConfirmStepOne.component');
var orderConfirmStepTwo_component_1 = require('./orderConfirm/orderConfirmStepTwo.component');
var orderConfirmStepThree_component_1 = require('./orderConfirm/orderConfirmStepThree.component');
var routes = [
    { path: '', component: index_component_1.IndexComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    {
        path: 'orderConfirm', component: orderConfirm_component_1.OrderConfirmComponent,
        children: [
            { path: '', component: orderConfirmStepOne_component_1.orderConfirmStepOneComponent },
            { path: 'stepTwo', component: orderConfirmStepTwo_component_1.orderConfirmStepTwoComponent },
            {
                path: 'stepThree',
                component: orderConfirmStepThree_component_1.orderConfirmStepThreeComponent
            },
            {
                path: '**',
                component: notfound_component_1.NotFoundComponent
            }
        ]
    },
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