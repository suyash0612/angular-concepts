import { Component, ElementRef, Input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {
  @Input()
  friendInfo : ParentComponent;
}
