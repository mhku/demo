import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service'

@Component({
    selector: 'storeIndex',
    templateUrl: './index.component.html',
    styleUrls:[
        'assets/css/animate.css',
        'assets/css/item_cat.css',
        'assets/css/slide.css'
        ]
})

export class IndexComponent implements OnInit {
    //初始化一个空的数组
    carouselItems:Array<any> = [];recommendedItems:Array<any> = [];
    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];

    constructor(private myHS:MyHttpService) { }

    ngOnInit() { 
        this.myHS
        .sendRequest("http://localhost/ajia_code/data/product/index.php")
        .subscribe((result:any)=>{
            console.log(result);
            //保存轮播图
            this.carouselItems = result.carouselItems;
            //保存推荐商品的数据
            this.recommendedItems = result.recommendedItems

            //初始化slides
            for(var i=0;i<this.carouselItems.length;i++){
                var myImg = 
                    this.carouselItems[i].img;
                this.slides.push({
                    image:myImg
                })
            }


        })
    }
}