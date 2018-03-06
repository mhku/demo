import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../service/myhttp.service'

@Component({
    selector: 'storeHeader',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {
    isUserLogin:boolean = false;
    userName:string = "";

    constructor(private myHS:MyHttpService) { }

    // 初始化的工作
    ngOnInit() { 
        this.myHS
            .sendRequest("http://localhost/ajia_code/data/user/session_data.php")
            .subscribe((result:any)=>{
                console.log(result);
                if(result.uname){
                    //已登录
                    this.isUserLogin = true;
                    this.userName = result.uname;
                }
                else{
                    this.isUserLogin = false;
                    this.userName = "";
                }
            })
    }

    //退出登录
    doLogout(){
        this.myHS
        .sendRequest("http://localhost/ajia_code/data/user/logout.php")
        .subscribe((result:any)=>{
            console.log(result);
            //如果退出登录成功，显示用户未登录时的信息
            if(result.code == 200){
                this.isUserLogin = false;
                this.userName = "";
            }
        })
    }
}