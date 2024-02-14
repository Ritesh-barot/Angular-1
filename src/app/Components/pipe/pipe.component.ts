import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
title='pipe use in Angular'
  constructor() { }

  ngOnInit(): void {
  }
users:any=[
  
    {
      "id": 1,
      "name": "John Doe",
      "city": "New York",
      "dob":new Date ("2002-07-03"),
      "salary":6000
    },
    {
      "id": 2,
      "name": "Alice Smith",
      "city": "Los Angeles",
      "dob": new Date ("1980-07-02"),
      "salary":15000
    },
    {
      "id": 3,
      "name": "Robert Johnson",
      "city": "Chicago",
      "dob":new Date ("2024-06-02"),
      "salary":25000
    },
    {
      "id": 4,
      "name": "Emily Brown",
      "city": "Houston",
      "dob":new Date ("1988-07-02"),
      "salary":40000
    },
    {
      "id": 5,
      "name": "Michael Wilson",
      "city": "San Francisco",
      "dob": new Date ("1980-07-02"),
      "salary":70000
    }
  
  
]
}
