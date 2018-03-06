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
var myhttp_service_1 = require('./myhttp.service');
var Demo13Component = (function () {
    function Demo13Component(myHS) {
        this.myHS = myHS;
    }
    Demo13Component.prototype.ngOnInit = function () { };
    Demo13Component.prototype.handleClick = function () {
        //从服务器端获取数据
        this.myHS.sendRequest("http://localhost/admin/data/product_list.php")
            .subscribe(function (result) {
            console.log(result);
        });
    };
    Demo13Component = __decorate([
        core_1.Component({
            selector: 'demo13',
            template: "\n        <h2>http</h2>\n        <button (click)=\"handleClick()\">\n            clickMe\n        </button>\n    "
        }), 
        __metadata('design:paramtypes', [myhttp_service_1.MyHttpService])
    ], Demo13Component);
    return Demo13Component;
}());
exports.Demo13Component = Demo13Component;
//# sourceMappingURL=demo13.component.js.map