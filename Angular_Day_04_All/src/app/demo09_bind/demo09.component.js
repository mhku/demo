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
var Demo09Component = (function () {
    function Demo09Component() {
        this.myOpacityValue = 0.2;
    }
    Demo09Component.prototype.ngOnInit = function () { };
    Demo09Component = __decorate([
        core_1.Component({
            selector: 'demo09',
            template: "\n        <button\n         [ngClass]=\"{myHightlight:true}\">\n            clickme\n        </button>\n        <h1 \n        [ngStyle]=\"{opacity:myOpacityValue}\">\u900F\u660E\u5EA6\u662F\u52A8\u6001\u7ED1\u5B9A\u8FC7\u6765\u7684</h1>\n    ",
            styleUrls: ['./test.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Demo09Component);
    return Demo09Component;
}());
exports.Demo09Component = Demo09Component;
//# sourceMappingURL=demo09.component.js.map