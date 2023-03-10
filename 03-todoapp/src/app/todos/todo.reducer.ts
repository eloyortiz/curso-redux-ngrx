import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Todo[] = [
  new Todo('hello world 1'),
  new Todo('hello world 2'),
  new Todo('hello world 3'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new Todo(text)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo;
    });
  }),
  on(actions.edit, (state, { id, text }) => {
    return state.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            text,
          }
        : todo;
    });
  }),
  on(actions.remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(actions.toggleAll, (state, { completed }) =>
    state.map((todo) => {
      return {
        ...todo,
        completed,
      };
    })
  ),
  on(actions.clearCompleted, (state) => state.filter((todo) => !todo.completed))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
