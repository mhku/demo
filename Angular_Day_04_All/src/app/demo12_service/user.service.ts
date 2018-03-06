// a-service

import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    constructor() { }
    //在服务中定义一个方法，用来检查用户是否登录
    checkUserLogin(){
        return true;
    }
}