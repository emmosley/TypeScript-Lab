import { Component, OnInit } from '@angular/core';
import { tasks } from '../tasks';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = tasks;
  constructor() { }

  // addTask() {
  //   tasks.push({task:"go run", completed: false})
  // }
  
  ngOnInit() {
  }

}
