import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, todoFilter } from './filter.actions';


export const initialState: todoFilter = 'all';

const _filterReducer = createReducer<todoFilter, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter),
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}
