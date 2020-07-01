import { Itask } from './task.interface'

export class Task implements Itask {
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }
  
  private _title : String;
  public get title() : String {
    return this._title;
  }
  public set title(v : String) {
    this._title = v;
  }
  
  private _completed : Boolean;
  public get completed() : Boolean {
    return this._completed;
  }
  public set completed(v : Boolean) {
    this._completed = v;
  }
  
  constructor(id : number, title : String, completed : Boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
