import { Component, ElementRef, EventEmitter, Input, ViewChild } from '@angular/core';
import { Person } from 'src/app/Models/Person';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  persons = [
    {
      firstname : 'suyash',
      middlename : 'devendra',
      lastname : 'sawant',
      gender : 'male',
      disability : false,
      age : 24,
      experience : ['TCS',
                    'DigiplusIT']
    },
    {
      firstname : 'sayali',
      middlename : 'devendra',
      lastname : 'sawant',
      gender : 'female',
      disability : false,
      age : 28,
      experience : ['IQVIA',
                    'Cognizant',
                    'Lonza'
                    ]
    }
  ]

//   @ViewChild('personlistreference')
//   personListRef : ElementRef;

  checkBtnState : boolean = false;

  showDetails(){
    this.checkBtnState = !this.checkBtnState;
    this.childcmpmsg = '';
  }

  childcmpmsg : string = '';

  onDataRecv(eventVal : string){
    this.childcmpmsg = eventVal;
  }
}
