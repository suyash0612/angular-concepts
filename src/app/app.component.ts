import { QueryList } from '@angular/core';
import { Component, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-view-children';
  fullName : string = '';
  @ViewChildren('inputReference')
  inputElemets : QueryList<ElementRef>;

  showName(){
    let totName = '';
    this.inputElemets.forEach(element => {
      console.log(element.nativeElement.value);
      totName += element.nativeElement.value;
    });
    this.fullName = totName.trim();
  }
}
