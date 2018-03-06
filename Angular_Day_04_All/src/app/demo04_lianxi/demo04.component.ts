import {Component} from '@angular/core'

@Component({
    selector:'demo04',
    template:`
        <h1>学生数组的练习</h1>
        <table>
            <thead>
              <tr>
               <th>年龄</th>
               <th>性别</th>
               <th>成绩</th>
              </tr>
            </thead>
        <tbody>
            <ng-container 
             *ngFor="let stu of stuList">
                <tr
                *ngIf="stu.score > 80">
                    <td>{{stu.age}}</td>
                    <td>{{stu.sex}}</td>
                    <td>{{stu.score}}</td>
                </tr>
            </ng-container>
        </tbody>
        </table>   
    `
})

export class Demo04Component{
    stuList:Array<any> = [
        {age:20,sex:1,score:85},
        {age:30,sex:1,score:70},
        {age:19,sex:1,score:86},
        {age:21,sex:1,score:90},
        {age:22,sex:1,score:30}
    ];
}