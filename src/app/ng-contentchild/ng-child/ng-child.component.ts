import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { NgNameComponent } from '../ng-name/ng-name.component';

@Component({
  selector: 'app-ng-child',
  templateUrl: './ng-child.component.html',
  styleUrls: ['./ng-child.component.css']
})
export class NgChildComponent {
  @ContentChild('div_content')
  parentRef : ElementRef;

  @ContentChild(NgNameComponent)
  nameRef : NgNameComponent;

  @ContentChildren('detailsref')
  detailslist : QueryList<ElementRef>;

  @ContentChildren(NgNameComponent)
  nameList : QueryList<NgNameComponent>;

  onClickBtn(){
    console.log(this.parentRef.nativeElement);
    console.log(this.nameRef.name);

    this.detailslist.forEach(element => {
      console.log(element.nativeElement);
    });

    this.nameList.forEach((el) => {
      console.log(el.name);
    })
  }
}
