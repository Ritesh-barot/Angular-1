import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }
  mystyles = {
width:'100px',
height:'150px',
background:'red'
  }
  userdata: any='';
getdata(data:NgForm){
console.log(data),
this.userdata=data
}
  ngOnInit(): void {
  }
  // event binding
  name3:any;    

  // property binding
  name2='ritesh barot'

  // ngFor directive
  name=['Jay shree Ram','MegaMinds', 'Ritesh'];

  displayval:any='';
  aleartmeassage(name:string){
    alert( name)
  };
  Fcall(){
    console.log('funcation call')
  }
  boxvalue(val:string){
    console.log(val);
    this.displayval=val
  }
  ngbutton(){
    console.log()
  }
}
