import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service'

@Component({
    selector: 'storeCart',
    templateUrl: './cart.component.html',
    styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    list:Array<any> = [];
    constructor(private myHS:MyHttpService) { }

    ngOnInit() { 
        //向服务器请求购物车中数据
        this.myHS
        .sendRequest("http://localhost/ajia_code/data/cart/list.php")
        .subscribe((result:any)=>{
            console.log(result);
            this.list = result.data;
        })
    }

    //修改指定商品的数量
    modifyCount(isReduce:boolean,index:number){
        if(isReduce){
            //数量减1
            if(this.list[index].count == 1){
                return;
            }
            this.list[index].count--;
        }
        else{
            this.list[index].count++;
        }
    }

    // 计算总金额
    calcSum(){
        let totalPrice = 0;
        for(var i=0;i<this.list.length;i++){
            let product = this.list[i];
            totalPrice+=(product.count*product.price)
        }
        return totalPrice;
    }
}