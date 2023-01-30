import { createAction } from '@ngrx/store';

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const reset = createAction('[Contador] Reset');
