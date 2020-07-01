import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Itask } from '../models/task.interface'

@Injectable({
  providedIn: 'root',
})
export class TodolistService {

  toDoList: Observable<Itask[]>;

  constructor( private http : HttpClient) {
    this.toDoList = this.http.get<Itask[]>('https://jsonplaceholder.typicode.com/todos?userId=1')
  }

  getToDoList(){
    return this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos?userId=1')
  }

  // addNewTask(task) {
  //   this.toDoList.push(task);
  //   console.log(this.getLastId());
  // }


}
