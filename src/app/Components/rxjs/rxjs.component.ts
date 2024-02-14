import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent  {
  result!: number;
  result2=[6,7,8,9,10];
  constructor() {
    const observable = from([1,2,3,4,5]);
    observable.subscribe(v=>this.result=v)

    
   }
    ofObservable =of(this.result2);
   getof(){
  
   this.ofObservable.subscribe({
    next:(val:any)=>{
      this.result2.push(val)
      console.log(val)
      this.result2=val;
    },
    error(err){
      alert(err.message)
    },
    complete(){
      alert('all data is done')
    }
   })

}
}