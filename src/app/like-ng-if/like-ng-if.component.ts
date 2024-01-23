import { Component } from '@angular/core';

@Component({
  selector: 'app-like-ng-if',
  templateUrl: './like-ng-if.component.html',
  styleUrls: ['./like-ng-if.component.css']
})
export class LikeNgIfComponent {
  bool : boolean = false;
  toggleDoc(){
    this.bool=!this.bool;
  }
}
