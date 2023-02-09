import { createAction, props } from '@ngrx/store';
import { IngresoGasto } from '../models/ingreso-gasto.model';

export const unSetItems = createAction('[IngresoGasto] Unset Items');

export const setItems = createAction(
	'[IngresoGasto] Set Items',
	props<{ items: IngresoGasto[] }>()
);
