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
var CheckComponent = (function () {
    function CheckComponent(myRouter) {
        this.myRouter = myRouter;
        this.productPrice = 100;
    }
    CheckComponent.prototype.jumpToPay = function () {
        this.myRouter.navigateByUrl('myPay/123');
    };
    CheckComponent.prototype.ngOnInit = function () { };
    CheckComponent = __decorate([
        core_1.Component({
            selector: 'check',
            template: "\n        <h1>\u5546\u54C1\u67E5\u770B\u9875\u9762</h1>\n        <button (click)=\"jumpToPay()\">\u53BB\u652F\u4ED8</button>\n        <a [routerLink]=\"'myPay/'+productPrice\">\n            \u53BB\u652F\u4ED8\n        </a>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CheckComponent);
    return CheckComponent;
}());
exports.CheckComponent = CheckComponent;
//# sourceMappingURL=check.component.js.map