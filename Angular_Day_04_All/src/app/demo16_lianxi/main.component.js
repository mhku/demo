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
var common_1 = require('@angular/common');
var MainComponent = (function () {
    function MainComponent(myRouter, myLocation) {
        this.myRouter = myRouter;
        this.myLocation = myLocation;
    }
    MainComponent.prototype.ngOnInit = function () { };
    //返回上一页
    MainComponent.prototype.backToPre = function () {
        this.myLocation.back();
    };
    MainComponent.prototype.jumpToPerson = function () {
        this.myRouter.navigateByUrl('myPerson');
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            template: "\n            <h1>\u8FD9\u662F\u4E3B\u9875\u9762</h1>\n            <button (click)=\"jumpToPerson()\">\n                \u67E5\u770B\u4E2A\u4EBA\u4E2D\u5FC3\n            </button>\n            <button (click)=\"backToPre()\">\n                \u8FD4\u56DE\u4E0A\u4E00\u9875\n            </button>\n        "
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map