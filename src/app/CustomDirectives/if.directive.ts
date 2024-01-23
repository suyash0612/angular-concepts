import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
	selector: '[appIf]'
})
export class IfDirective{
	// 1. get access tp DOM element to add/remove
	// 2. place/container from where we want to add/remove
	constructor(private view : TemplateRef<any>, private template : ViewContainerRef){
		// this is the view/host where we want to add structural directive to modify it
		// template - we get refernce of ng-template
	}

	@Input() set appIf(condition : boolean){
			if(condition){
				this.template.createEmbeddedView(this.view);
			}else{
				this.template.clear();
			}
		} 
}