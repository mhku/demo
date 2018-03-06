import { Injectable } from '@angular/core';

@Injectable()
export class HeartBeatService {
    myTimer:any = null;
    constructor() { }

    startHearBeat(){
        if(this.myTimer){
            return;
        }
        this.myTimer = 
        setInterval(()=>{
            console.log('in HeartBeat..');
        },500);
    }

    stopHeartBeat(){
        clearInterval(this.myTimer)
        this.myTimer = null;
    }
}