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
var common_1 = require('@angular/common');
var NotFoundComponent = (function () {
    function NotFoundComponent(myLocation) {
        this.myLocation = myLocation;
        this.count = 5;
        this.myTimer = null;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myTimer = setInterval(function () {
            // 数字自减操作
            _this.count--;
            // 超过临界值，结束定时器，并跳转到上一页
            if (_this.count == 1) {
                clearInterval(_this.myTimer);
                _this.myLocation.back();
                _this.myTimer = null;
            }
        }, 1000);
    };
    NotFoundComponent.prototype.ngOnDestroy = function () {
        //结束定时器
        if (this.myTimer) {
            clearInterval(this.myTimer);
            this.myTimer = null;
        }
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'notFound',
            templateUrl: './notfound.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=notfound.component.js.map