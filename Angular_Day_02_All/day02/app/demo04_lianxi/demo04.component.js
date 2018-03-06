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
var Demo04Component = (function () {
    function Demo04Component() {
        this.stuList = [
            { age: 20, sex: 1, score: 85 },
            { age: 30, sex: 1, score: 70 },
            { age: 19, sex: 1, score: 86 },
            { age: 21, sex: 1, score: 90 },
            { age: 22, sex: 1, score: 30 }
        ];
    }
    Demo04Component = __decorate([
        core_1.Component({
            selector: 'demo04',
            template: "\n        <h1>\u5B66\u751F\u6570\u7EC4\u7684\u7EC3\u4E60</h1>\n        <table>\n            <thead>\n              <tr>\n               <th>\u5E74\u9F84</th>\n               <th>\u6027\u522B</th>\n               <th>\u6210\u7EE9</th>\n              </tr>\n            </thead>\n        <tbody>\n            <ng-container \n             *ngFor=\"let stu of stuList\">\n                <tr\n                *ngIf=\"stu.score > 80\">\n                    <td>{{stu.age}}</td>\n                    <td>{{stu.sex}}</td>\n                    <td>{{stu.score}}</td>\n                </tr>\n            </ng-container>\n        </tbody>\n        </table>   \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo04Component);
    return Demo04Component;
}());
exports.Demo04Component = Demo04Component;
//# sourceMappingURL=demo04.component.js.map