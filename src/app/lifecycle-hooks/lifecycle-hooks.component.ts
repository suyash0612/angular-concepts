import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent {
  inputVal : string;
  @ViewChild('inputtext') 
  inputRef : ElementRef;
  getTextFromInputField(){
    this.inputVal = this.inputRef.nativeElement.value;
  }

}
