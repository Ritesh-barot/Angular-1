import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormControlName } from '@angular/forms';


@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RDFComponent implements OnInit {

  constructor() { }
  loginform= new FormGroup ({
    name:new FormControl(''),
    age:new FormControl(''),
    email:new FormControl(''),
    pnumber:new FormControl(''),
  })
  logindata(){
    console.log(this.loginform.value)
  }
  ngOnInit(): void {
  }

}
