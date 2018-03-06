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
var Demo20Component = (function () {
    function Demo20Component() {
        //图片之间轮播的间隔时间
        this.NextPhotoInterval = 1000;
        //是否要禁用循环播放
        this.noLoopSlides = false;
        //Photos
        this.slides = [];
    }
    Demo20Component.prototype.ngOnInit = function () {
        this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
    };
    Demo20Component = __decorate([
        core_1.Component({
            selector: 'demo20',
            template: "\n        <h1>\u8FD9\u662F\u4E00\u4E2A\u8F6E\u64AD\u56FE\u7684\u6848\u4F8B</h1>\n        <carousel [interval]=\"NextPhotoInterval\" [noWrap]=\"noLoopSlides\">\n    <slide *ngFor=\"let slidez of slides; let index=index\" [active]=\"slidez.active\">\n        <img [src]=\"slidez.image\" style=\"margin:auto;\">\n\n        <div class=\"carousel-caption\">\n            <h3 style=\"background-color: transparent;color: white;\">Slide {{index + 1}}</h3>\n            <p style=\"background-color: transparent;color: white;\">{{slidez.text}}</p>\n        </div>\n    </slide>\n</carousel>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo20Component);
    return Demo20Component;
}());
exports.Demo20Component = Demo20Component;
//# sourceMappingURL=demo20.component.js.map