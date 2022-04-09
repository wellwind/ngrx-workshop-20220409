import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTodoListProperty } from '../todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList$ = this.store.select(selectTodoListProperty);

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.store
      .select(selectTodoListProperty)
      .subscribe(data => {
        console.log(data);
      });
  }

}
