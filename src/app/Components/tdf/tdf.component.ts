import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }
  formdata(data:any){
    console.log(data)
  }
  ngOnInit(): void {
  }
// Toggle for ng container
toggle:boolean=false
toggleClick(){
this.toggle = !this.toggle
}
}
