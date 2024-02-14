import {  AfterViewInit, Component, ContentChild, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  // @ViewChild('highlight')marker!: ElementRef;
  @ViewChildren('highlight')marker!: QueryList<any>;
  @ContentChild('contentchild')cChild!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
ngAfterViewInit(): void {
console.log(this.marker.length)

//  viewchild
// this.marker.nativeElement.style.color='red'

    //viewchildren 
this.marker.first.nativeElement.style.color='red'
this.marker.last.nativeElement.style.color='green'
}
}
