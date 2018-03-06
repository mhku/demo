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
        this.timer = null;
    }
    NotFoundComponent.prototype.ngOnDestroy = function () {
        // 清理工作，比如结束定时器
        clearInterval(this.timer);
    };
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.count--;
            if (_this.count == 1) {
                //结束定时器
                clearInterval(_this.timer);
                //返回上一页
                _this.myLocation.back();
            }
        }, 1000);
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'notFound',
            template: "\n        <p>404 page not found</p>\n        <h2>{{count+\"s \u81EA\u52A8\u8FD4\u56DE\u4E0A\u4E00\u9875\"}}</h2>\n    "
        }), 
        __metadata('design:paramtypes', [common_1.Location])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=notfound.component.js.map