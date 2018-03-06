// a-directive
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
var TestDirective = (function () {
    function TestDirective(el) {
        this.el = el;
        //@Input() test="";
        this.myTest = "";
        console.log('自定义指令被调用了');
        console.log(el);
        // console.log(this.test);
    }
    //初始化时 会自动调用的一个方法
    TestDirective.prototype.ngOnInit = function () {
        //将调用指令的元素 背景色设置一下
        this.el.nativeElement.style.backgroundColor = '#ff0000';
        // console.log(this.test);
        console.log(this.myTest);
    };
    __decorate([
        core_1.Input('test'), 
        __metadata('design:type', Object)
    ], TestDirective.prototype, "myTest", void 0);
    TestDirective = __decorate([
        core_1.Directive({ selector: '[test]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], TestDirective);
    return TestDirective;
}());
exports.TestDirective = TestDirective;
//# sourceMappingURL=test.directive.js.map