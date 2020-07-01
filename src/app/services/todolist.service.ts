import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators'
import { Itask } from '../models/task.interface'

@Injectable({
  providedIn: 'root',
})
export class TodolistService {

  toDoList$: Observable<Itask[]>;

  constructor( private http : HttpClient) {
    const url = 'https://jsonplaceholder.typicode.com/todos?userId=1'
    this.toDoList$ = this.http.get<Itask[]>(url).pipe(share())
  }

  getToDoList(){
    return this.toDoList$
  }

}
