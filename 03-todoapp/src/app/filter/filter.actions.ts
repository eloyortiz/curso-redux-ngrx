import { createAction, props } from '@ngrx/store';

export type todoFilter = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: todoFilter }>()
);
