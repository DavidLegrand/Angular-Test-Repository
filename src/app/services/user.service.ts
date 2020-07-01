import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$;

  constructor(private http: HttpClient) {}

  getUser(id) {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    this.user$ = this.http.get(url).pipe(share());
    return this.user$;
  }
}
