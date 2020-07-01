import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TodolistService } from '../../services/todolist.service';
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  toDoList: Task[];

  constructor(private tdls: TodolistService) {}

  ngOnInit(): void {
    this.tdls.toDoList.subscribe((data) => (this.toDoList = <Task[]>data));
  }

  getLastId(): number {
    return this.toDoList.reduce((reducer: Task, current: Task) => {
      return reducer.id > current.id ? reducer : current;
    }).id;
  }

  addNewTask(task) {
    this.toDoList.push(task)
  }
}
