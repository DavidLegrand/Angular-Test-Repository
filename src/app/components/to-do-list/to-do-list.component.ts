import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';
import { Task } from '../../models/task.model';
import { TodolistService } from '../../services/todolist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit, OnDestroy {
  toDoList: Task[];
  subscription: Subscription;
  lastId: Number;
  constructor(private tdls: TodolistService) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.tdls
      .getToDoList()
      .subscribe((data) => (this.toDoList = <Task[]>data));
  }

  getLastId() {
    if (this.toDoList)
      return this.toDoList.reduce((reducer: Task, current: Task) => {
        return reducer.id > current.id ? reducer : current;
      }).id;
  }

  addNewTask(task) {
    this.toDoList.push(task);
  }
}
