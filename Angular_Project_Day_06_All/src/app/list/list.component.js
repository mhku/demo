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
var myhttp_service_1 = require('../utility/service/myhttp.service');
var ListComponent = (function () {
    function ListComponent(myHS) {
        this.myHS = myHS;
        this.list = [];
        this.pageCount = 1;
        this.pageList = [];
        this.pageNo = 1; //保存当前选中的是第几页
    }
    ListComponent.prototype.changePage = function (nowPage) {
        //加载对应页面的数据
        //高亮显示当前选中的页码
        this.pageNo = nowPage;
        this.loadListByPage();
    };
    //上一页和下一页
    ListComponent.prototype.modifyPage = function (isNext) {
        if (isNext) {
            this.pageNo++;
        }
        else {
            this.pageNo--;
        }
        this.loadListByPage();
    };
    //根据页码加载列表数据
    ListComponent.prototype.loadListByPage = function () {
        var _this = this;
        //向服务器端发请求获取数据
        this.myHS.sendRequest("http://localhost/ajia_code/data/product/list.php?pno=" + this.pageNo).subscribe(function (result) {
            console.log(result);
            //保存产品列表
            _this.list = result.data;
            //保存商品列表的总页数
            _this.pageCount = result.pageCount;
            //根据pageCount数值来创建一个数组（1,2,3,...）
            _this.pageList = [];
            for (var i = 0; i < _this.pageCount; i++) {
                var page = i + 1;
                _this.pageList.push(page);
            }
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.loadListByPage();
    };
    //添加到购物车
    ListComponent.prototype.addToCart = function (lid) {
        this.myHS
            .sendRequest("http://localhost/ajia_code/data/cart/add.php?lid=" + lid + "&buyCount=1")
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'storeList',
            templateUrl: './list.component.html',
            styleUrls: ['assets/css/products.css']
        }), 
        __metadata('design:paramtypes', [myhttp_service_1.MyHttpService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map