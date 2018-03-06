import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sex'
})

export class SexPipe implements PipeTransform {
    /**
     *      0 | sex:'en' --》girl
			1 | sex:'en' --》boy
			0 | sex:'zh' --》女
			1 | sex:'zh' --》男
     */
    transform(value: any, ...args: any[]): any {
        if(args[0] == 'en'){
            if(value == 0){
                return 'girl'
            }
            else{
                return 'boy'
            }
        }else{
            if(value == 0){
                return '女'
            }
            else{
                return '男'
            }    
        }
    }
}