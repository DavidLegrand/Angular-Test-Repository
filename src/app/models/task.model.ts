export class Task {
  private _id: Number;
  public get id(): Number {
    return this._id;
  }
  public set id(v: Number) {
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
  
  constructor(id : Number, title : String, completed : Boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
