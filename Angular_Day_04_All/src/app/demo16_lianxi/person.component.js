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
var PersonComponent = (function () {
    function PersonComponent() {
    }
    PersonComponent.prototype.ngOnInit = function () { };
    PersonComponent = __decorate([
        core_1.Component({
            selector: 'person',
            template: "\n            <h1>\u8FD9\u662F\u4E2A\u4EBA\u4E2D\u5FC3\u9875\u9762</h1>\n            <a routerLink=\"/myMain\">\n                \u67E5\u770B\u4E3B\u9875\u9762\n            </a>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], PersonComponent);
    return PersonComponent;
}());
exports.PersonComponent = PersonComponent;
//# sourceMappingURL=person.component.js.map