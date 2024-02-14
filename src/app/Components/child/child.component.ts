import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  // viewchild
  meassge2:string ="data from child"
@Input() data=''
  ngOnInit(): void {
  }
  @Output() dataevent = new EventEmitter();

  display2=''
save2(data:string){
  console.log(data)
  this.display2=data
}


}
