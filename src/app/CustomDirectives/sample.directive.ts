import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {

  @HostBinding('value')
  inputValue : string = 'Hi There, good to see you!';
  constructor() { }

  @HostListener('focus')
  logEventInConsole(){
    console.log('Event Has Been Focused through Host Binding..');
  }

}
