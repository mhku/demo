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
var CartComponent = (function () {
    function CartComponent(myRouter) {
        this.myRouter = myRouter;
    }
    CartComponent.prototype.ngOnInit = function () { };
    CartComponent.prototype.handleClick = function () {
        this.myRouter.navigateByUrl('myOC/123');
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            template: "\n        <h1>\u8FD9\u662F\u8D2D\u7269\u8F66\u9875\u9762</h1>\n        <button (click)=\"handleClick()\">\n            \u53BB\u7ED3\u7B97\n        </button>\n        <a routerLink=\"/myOC/345\">\u53BB\u7ED3\u7B97</a>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map