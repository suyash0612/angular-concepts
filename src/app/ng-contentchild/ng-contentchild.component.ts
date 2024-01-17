import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-contentchild',
  templateUrl: './ng-contentchild.component.html',
  styleUrls: ['./ng-contentchild.component.css']
})
export class NgContentchildComponent {
  @ViewChild('div_content')
  parentRefWithinIt : ElementRef;

  parentBtn(){
    console.log(this.parentRefWithinIt.nativeElement);
  }
}
