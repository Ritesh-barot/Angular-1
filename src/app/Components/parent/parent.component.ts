import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {ChangeDetectorRef}  from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  constructor(private cd :ChangeDetectorRef) { }

  @ViewChild(ChildComponent) child ! : ChildComponent
  ngOnInit(): void {
  }
  meassge=''
  ngAfterViewInit(): void {
  this.meassge= this.child.meassge2
  this.cd.detectChanges()
console.log (this.child.meassge2)

  }
  
  showdata='';
  display:any;
save(data:any){
console.log(data)
this.display=data
}
save2(data2:any){
console.log(data2)
this.showdata=data2
}
}
