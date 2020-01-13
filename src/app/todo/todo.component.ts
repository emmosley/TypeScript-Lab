import { Component, OnInit } from '@angular/core';
import { tasks, taskModel } from '../tasks';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = tasks;
  constructor() { }
  filterTask: string = "";
  
  removeTask(searchTask) {
    let index = tasks.indexOf(searchTask);
    tasks.splice(index, 1);
  }
  

  completeTask(done) {
    done.completed = true;
  }

  
  searchTasks(userInput: string, task: taskModel) : boolean{
    if (task.task.toLowerCase().search(userInput.toLowerCase()) == -1) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
  }

}
