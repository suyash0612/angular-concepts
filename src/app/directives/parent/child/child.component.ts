import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  personChild : Person;

  @Input()
  state : boolean;

  
  statement : string;

  @Output()
  evtemt : EventEmitter<string> = new EventEmitter<string>();

  print(){
    console.log(this.personChild.firstname);
  }

  onClick(event : Person){
    this.statement = event.firstname + " " + event.middlename + " " + event.lastname + " has good experience...";
    this.evtemt.emit(this.statement);
  }
}
