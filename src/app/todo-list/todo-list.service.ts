import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  queryTodoList() {
    return of(['API - Todo Item 1','API - Todo Item 2','API - Todo Item 3'])
      .pipe(delay(1000));
  }
}
