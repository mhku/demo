import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <demo03></demo03>
  `,
})
export class AppComponent  { name = ' World'; }
