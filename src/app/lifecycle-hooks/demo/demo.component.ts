import { Component, Input, OnChanges, SimpleChanges, OnInit,
   ViewChild, ElementRef, DoCheck, AfterContentInit,
    ContentChild, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, 
DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  title : string = 'demo component initialised';
  @Input()
  message : string;

  @ViewChild('messageRef')
  msgEle : ElementRef;

  @ContentChild('projectedRef')
  prjCon : ElementRef;

  constructor(){
    console.log('Demo Constructor Initialized');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('ngOnChanges hook called');
    console.log(changes);
    // console.log(this.msgEle.nativeElement);
  }

  ngOnInit(){
    console.log('ngOnInit hook called');
  }

  ngDoCheck(){
    console.log('ngDoCheck hook called');
    // console.log('in ngDoCheck ',this.prjCon);
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit hook called');
    // console.log('in ngAfterContentInit ',this.prjCon.nativeElement);
}
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked hook called');
    // console.log('in ngAfterContentChecked ',this.prjCon.nativeElement);
    console.log('in ngAfterContentChecked ',this.msgEle);
}

  ngAfterViewInit() {
    console.log('ngAfterViewInit hook called');
    console.log('in ngAfterViewInit ',this.msgEle.nativeElement);
}

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked hook called');
    console.log('in ngAfterViewChecked ',this.msgEle.nativeElement);
}

ngOnDestroy() {
  console.log('ngOnDestroy hook called');
  }


}
