import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-name',
  templateUrl: './ng-name.component.html',
  styleUrls: ['./ng-name.component.css']
})
export class NgNameComponent {
  @Input()
  name : string = '';
}
