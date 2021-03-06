import { createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo-list.actions';

export const todoListFeatureKey = 'todoListState';

export interface State {
  loading: boolean;
  todoList: string[];
}

export const initialState: State = {
  loading: false,
  todoList: ['Todo 1', 'Todo 2']
};

export const reducer = createReducer(
  initialState,

  // on(TodoListActions.loadTodoLists, state => state),
  on(TodoListActions.loadTodoListsSuccess, (state, action) => ({
    ...state,
    todoList: action.data
  })),
  on(TodoListActions.loadTodoListsFailure, (state, action) => ({
    ...state,
    todoList: []
  })),

  on(TodoListActions.addTodoItem, (state, action) => ({
    ...state,
    todoList: [ ...state.todoList, action.payload.todoText ]
  }))

);
