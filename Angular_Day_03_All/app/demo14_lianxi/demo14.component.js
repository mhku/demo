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
var storehttp_service_1 = require('./storehttp.service');
var Demo14Component = (function () {
    function Demo14Component(myHS) {
        this.myHS = myHS;
        //定义一个数组，保存result.data中的数据
        this.list = [];
    }
    Demo14Component.prototype.ngOnInit = function () { };
    Demo14Component.prototype.loadData = function () {
        var _this = this;
        this.myHS.sendGet('http://localhost/admin/data/product_list.php')
            .subscribe(function (result) {
            _this.list = result.data;
        });
    };
    Demo14Component = __decorate([
        core_1.Component({
            selector: 'demo14',
            template: "\n        <button (click)=\"loadData()\">\n            clickme\n        </button>\n        <ul>\n            <li *ngFor=\"let tmp of list\">\n                {{tmp.title}}\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [storehttp_service_1.StoreHttpService])
    ], Demo14Component);
    return Demo14Component;
}());
exports.Demo14Component = Demo14Component;
//# sourceMappingURL=demo14.component.js.map