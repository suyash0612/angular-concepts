import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) { }

  @Input('appStyle')
  set style(value:object){
    let entries = Object.entries(value);
    console.log(entries);
    for(let item of entries){
      let [styleName,styleValue] = item;
      // console.log("hey",styleName,styleValue);
      this.renderer.setStyle(this.element.nativeElement,styleName,styleValue);
    }
  }

}
