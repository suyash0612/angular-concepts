import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer : Renderer2) { }

  @Input('appClass')
  set display(value:object){
    let entries = Object.entries(value);
    for(let item of entries){
      let [className, classState] = item;
      if(classState){
        this.renderer.addClass(this.element.nativeElement,className);
      }
      // console.log(item[0],item[1]);
    }
  }
}
