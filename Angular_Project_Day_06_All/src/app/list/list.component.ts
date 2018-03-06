import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service'

@Component({
    selector: 'storeList',
    templateUrl: './list.component.html',
    styleUrls:['assets/css/products.css']
})

export class ListComponent implements OnInit {
    list:Array<any> = [];
    pageCount:number = 1;
    pageList:Array<any>=[];
    pageNo:number=1;//保存当前选中的是第几页

    constructor(private myHS:MyHttpService) { }

     changePage(nowPage:number){
        //加载对应页面的数据
        //高亮显示当前选中的页码
        this.pageNo = nowPage;
        this.loadListByPage();
      }
      //上一页和下一页
    modifyPage(isNext:boolean){
        if(isNext){
          this.pageNo++;
        }
        else{
          this.pageNo--;
        }
        this.loadListByPage();
      }

    //根据页码加载列表数据
    loadListByPage(){
          //向服务器端发请求获取数据
        this.myHS.sendRequest("http://localhost/ajia_code/data/product/list.php?pno="+this.pageNo).subscribe((result:any)=>{
            console.log(result);
            //保存产品列表
            this.list = result.data;
            //保存商品列表的总页数
            this.pageCount = result.pageCount;
            //根据pageCount数值来创建一个数组（1,2,3,...）
            this.pageList = [];
            for(var i=0;i<this.pageCount;i++){
                var page = i+1;
                this.pageList.push(page);
            }
        })
    }

    ngOnInit() {
        this.loadListByPage();
    }

    //添加到购物车
    addToCart(lid:number){
        this.myHS
        .sendRequest("http://localhost/ajia_code/data/cart/add.php?lid="+lid+"&buyCount=1")
        .subscribe((result:any)=>{
            console.log(result);
        })
    }

}