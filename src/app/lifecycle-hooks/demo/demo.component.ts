import { Component, Input, OnChanges, SimpleChanges, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit {
  title : string = 'demo component initialised';
  @Input()
  message : string;

  @ViewChild('messageRef')
  msgEle : ElementRef;

  constructor(){
    console.log('Demo Constructor Initialized');
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges hook called');
    console.log(changes);
    console.log(this.msgEle.nativeElement);

  }

  ngOnInit(){
    console.log('ngOnInit hook called');
  }
}
