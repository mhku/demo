// a-directive

import { Directive,ElementRef,Input,OnInit} from '@angular/core';

@Directive({ selector: '[test]' })
export class TestDirective implements OnInit
{
    //@Input() test="";
    @Input('test') myTest="";

    constructor(private el:ElementRef) { 
        console.log('自定义指令被调用了');
        console.log(el);
        // console.log(this.test);
    }
    //初始化时 会自动调用的一个方法
    ngOnInit(){
        //将调用指令的元素 背景色设置一下
        this.el.nativeElement.style.backgroundColor = '#ff0000'
        // console.log(this.test);
        console.log(this.myTest);
    }
}
