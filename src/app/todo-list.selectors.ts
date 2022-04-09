import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTodoList from './todo-list.reducer';

export const selectTodoListState = createFeatureSelector<fromTodoList.State>(
  fromTodoList.todoListFeatureKey
);

export const selectTodoListProperty = createSelector(
  selectTodoListState,
  (state: fromTodoList.State) => state.todoList
);

export const selectTodoListProperty2 = (index: number) => createSelector(
  selectTodoListState,
  (state: fromTodoList.State) => state.todoList.filter((_, idx) => index === idx)
);


