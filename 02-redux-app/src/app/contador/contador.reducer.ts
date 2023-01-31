import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './contador.actions';

// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {

//     case incrementar.type:
//       return state + 1;

//     case decrementar.type:
//       return state - 1;
//     default:
//       return state;
//   }
// }

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(actions.incrementar, (state) => state + 1),
  on(actions.decrementar, (state) => state - 1),
  on(actions.reset, (state) => initialState),
  on(actions.multiplicar, (state, { numero }) => state * numero),
  on(actions.dividir, (state, { numero }) => state / numero)
);

export function contadorReducer(state: number = initialState, action: Action) {
  return _contadorReducer(state, action);
}
