import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent{
  inputVal : string = '';
  // inputVal : string = ['Hey, GoodMorning', 'Hello There ! Nice To meet you.'];
  @ViewChild('inputtext') 
  inputRef : ElementRef;

  todestroy : boolean = false;

  getTextFromInputField(){
    this.inputVal = this.inputRef.nativeElement.value;
    // this.inputVal.push(this.inputRef.nativeElement.value);
  }

  
  constructor(){
    console.log('life-cycle constructor called')
  }

  onDestroyBtn(){
    this.todestroy = !this.todestroy;
  }


//   ngAfterViewInit() {
//     console.log('lifecycle-hooks Component ngAfterViewInit hook called');
// }

//   ngAfterViewChecked() {
//   console.log('lifecycle-hooks Component ngAfterViewChecked hook called');
//   }

  

}
