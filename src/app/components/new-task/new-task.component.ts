import { Component, OnInit, EventEmitter, Output, Input, AfterViewInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { FormControl, Validators } from '@angular/forms';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: '[app-new-task]',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})

export class NewTaskComponent implements OnInit {
  newTask: Task;
  taskTitle: FormControl;
  error = new String('')
  @Output() createNewTask = new EventEmitter<Task>();
  @Input() id;
  constructor( private tdls : TodolistService) {}

  ngOnInit(): void {
    this.taskTitle = new FormControl(null,
      [
        Validators.required,
        Validators.minLength(3)
      ]
    )
  }

  handleChange(){
    console.log("task Control : ", this.taskTitle)
  }

  handleSubmit(e) {
    this.error = ""
    e.preventDefault();
    if (!this.taskTitle.errors) {
      this.newTask = new Task(this.id + 1, this.taskTitle.value, false);
      this.taskTitle.setValue('');
      this.createNewTask.emit(this.newTask);
    } else {
      if(this.taskTitle.errors.required){
        this.error += "le champ est requis<br>"
      }
      if(this.taskTitle.errors.minlength){
        this.error += "le champ est trop court<br>"
      }
    }
  }
}
