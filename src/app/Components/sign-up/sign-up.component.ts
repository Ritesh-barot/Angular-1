import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
signupUsers:any[]=[];
signupObj:any={
  username:'',
  email:'',
  password:'',
};
loginObj:any={
  username:'',
  password:'',
}
  constructor() { }

  ngOnInit(): void {
    const localData= localStorage.getItem('signupUsers');
    if(localData != null){
    this.signupUsers = JSON.parse(localData);
    }
  }
onsignup(){
this.signupUsers.push(this.signupObj);
localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
this.signupObj={
  username:'',
  email:'',
  password:'',
};
}
onlogin(){
const isUserExit=this.signupUsers.find(m=>m.username == this.loginObj.username && m.password == this.loginObj.password);
if(isUserExit != undefined){
alert('user Login Sucessfully ')
}
else{
  alert('not valid')
}
}
}
