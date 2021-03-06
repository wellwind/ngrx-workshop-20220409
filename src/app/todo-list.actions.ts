import { createAction, props } from '@ngrx/store';

export const loadTodoLists = createAction(
  '[TodoList] Load TodoLists'
);

export const loadTodoListsSuccess = createAction(
  '[TodoList] Load TodoLists Success',
  props<{ data: string[] }>()
);

export const loadTodoListsFailure = createAction(
  '[TodoList] Load TodoLists Failure',
  props<{ error: any }>()
);

export const addTodoItem = createAction('[TodoList] Add Todo Item', props<{ payload: { todoText: string } }>());
