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
var Demo10Component = (function () {
    function Demo10Component() {
        //定义一个保存透明度数据的变量
        this.myOpacityValue = 0;
        this.myTimer = null;
    }
    Demo10Component.prototype.ngOnInit = function () {
        var _this = this;
        //启动定时器 在定时器中修改一个变量
        this.myTimer = setInterval(function () {
            _this.myOpacityValue += 0.1;
            if (_this.myOpacityValue > 1) {
                _this.myOpacityValue = 0;
            }
        }, 300);
    };
    Demo10Component.prototype.ngOnDestroy = function () {
        // 组件销毁时，应该在此处理函数中完成清理工作
        clearInterval(this.myTimer);
    };
    Demo10Component = __decorate([
        core_1.Component({
            selector: 'demo10',
            template: "\n        <h1 [ngStyle]=\"{opacity:myOpacityValue}\">\n            \u8FD9\u662FDemo10\n        </h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo10Component);
    return Demo10Component;
}());
exports.Demo10Component = Demo10Component;
//# sourceMappingURL=demo10.component.js.map