import { ActionReducerMap } from '@ngrx/store';
import { todoFilter } from './filter/filter.actions';
import { filterReducer } from './filter/filter.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[],
  filter: todoFilter
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
