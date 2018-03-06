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
var InboxComponent = (function () {
    function InboxComponent() {
    }
    InboxComponent.prototype.ngOnInit = function () { };
    InboxComponent = __decorate([
        core_1.Component({
            selector: 'inbox',
            template: "\n        <h1>\u6536\u4EF6\u7BB1</h1>\n        <ul>\n            <li>\u5DF2\u8BFB\u90AE\u4EF61</li>\n            <li>\u5DF2\u8BFB\u90AE\u4EF62</li>\n            <li>\u5DF2\u8BFB\u90AE\u4EF63</li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], InboxComponent);
    return InboxComponent;
}());
exports.InboxComponent = InboxComponent;
//# sourceMappingURL=inbox.component.js.map