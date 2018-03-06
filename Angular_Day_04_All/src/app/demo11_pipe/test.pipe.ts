// a-pipe
// a-component
// a-directive
// a-module

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testNG'
})

export class TestPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let result ="";
        if(args[0] == 1){
            result = value.toUpperCase();
        }
        else{
            result = value.toLowerCase()
        }
        return result;
    }
}