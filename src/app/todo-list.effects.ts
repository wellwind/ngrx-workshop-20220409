import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as TodoListActions from './todo-list.actions';
import { TodoListService } from './todo-list/todo-list.service';




@Injectable()
export class TodoListEffects {

  loadTodoLists$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TodoListActions.loadTodoLists),
      concatMap(() =>
        this.todoListService.queryTodoList().pipe(
          map(data => TodoListActions.loadTodoListsSuccess({ data })),
          catchError(error => of(TodoListActions.loadTodoListsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private todoListService: TodoListService) {}

}
