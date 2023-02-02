import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea Todo',
  props<{ texto: string }>()
);
export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
