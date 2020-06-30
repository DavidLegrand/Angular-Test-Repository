import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDoList: Task[];

  constructor() {}
  ngOnInit(): void {
    this.toDoList = [new Task(1, 'Sortir le chien', false)];
  }
  addNewTask(task) {
    this.toDoList.push(task);
    console.log(this.getLastId())
  }
  getLastId() : Number {
    return this.toDoList.reduce((reducer: Task, current: Task) => {
      return reducer.id > current.id ? reducer : current;
    }).id;
  }
}
