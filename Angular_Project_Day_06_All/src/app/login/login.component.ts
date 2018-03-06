import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/myhttp.service'
import {Router} from '@angular/router'

@Component({
    selector: 'storeLogin',
    templateUrl: './login.component.html',
    styleUrls:['assets/css/login.css']
})

export class LoginComponent implements OnInit {
    uname:string = "";
    upwd:string = "";
    constructor(
        private myHS:MyHttpService,
        private myRouter:Router
        ) { }

    ngOnInit() { }

    //登录
    doLogin(){
        this.myHS.sendRequest('http://localhost/ajia_code/data/user/login.php?uname='
        +this.uname+"&upwd="+this.upwd)
        .subscribe((result:any)=>{
            console.log(result);
            if(result.code == 200){
                //跳转到首页
                this.myRouter
                .navigateByUrl('');
            }
        })
    }
}