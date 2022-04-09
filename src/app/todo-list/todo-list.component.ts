import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodoItem, loadTodoLists } from '../todo-list.actions';
import { selectTodoListProperty } from '../todo-list.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItem = '';
  todoList$ = this.store.select(selectTodoListProperty);

  constructor(private store : Store) { }

  ngOnInit(): void {
    this.store
      .select(selectTodoListProperty)
      .subscribe(data => {
        console.log(data);
      });

      this.store.dispatch(loadTodoLists());
  }

  addTodoItem() {
    this.store.dispatch(addTodoItem({ payload: {todoText: this.todoItem} }));
  }

}
