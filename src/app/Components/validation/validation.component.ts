import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }
  loginvalue = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    age: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('', [Validators.email])
  })
  logindata() {
    console.log(this.loginvalue.value)
  }
  logindata2(data: NgForm) {
    console.log(data)
  }
  get name() {
    return this.loginvalue.get('name')
  }
  get email() {
    return this.loginvalue.get('email')
  }
  ngOnInit(): void {
  }

}
