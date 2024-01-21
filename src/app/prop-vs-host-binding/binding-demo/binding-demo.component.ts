import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent {
  textValue : string = 'Hello World!';

  onFocusEvent(){
    console.log('element has been focused..');
  }
}
