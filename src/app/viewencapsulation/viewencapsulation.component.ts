import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewencapsulation',
  templateUrl: './viewencapsulation.component.html',
  styleUrls: ['./viewencapsulation.component.css'],

  // encapsulation: ViewEncapsulation.None      
  // no encapsulation or emulation in dom - css applied to all child components

  // encapsulation: ViewEncapsulation.Emulated      
  // encapsulation/embedding in dom
  // encapsulation applied with unique attributes to component elements

  // encapsulation: ViewEncapsulation.ShadowDom      
  // private encapsulation/embedding in abstract dom
  // used for abstraction

})
export class ViewencapsulationComponent {

}
