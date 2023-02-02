import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Salvar el mundo 1'),
  new Todo('Salvar el mundo 2'),
  new Todo('Salvar el mundo 3'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map((todo) => {
      return todo.id === id
        ? {
            ...todo,
            completado: !todo.completado,
          }
        : todo;
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
