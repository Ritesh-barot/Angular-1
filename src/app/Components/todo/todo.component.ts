import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
list:any[]=[]
gettodo(data:any){

this.list.push({id:this.list.length,name:data})
console.log(this.list)
}
remove(id:number){
  console.log(id)
this.list=this.list.filter(item=>item.id!==id)

}
  ngOnInit(): void {
  }

}
