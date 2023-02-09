import { Action, createReducer, on } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import * as ingresoActions from './ingreso-gasto.actions';

export interface State {
	items: IngresoGasto[];
}

export interface AppStateWithIngreso extends AppState {
	ingresosGastos: State;
}

export const initialState: State = {
	items: [],
};

const _ingresoGastoReducer = createReducer(
	initialState,

	on(ingresoActions.setItems, (state, { items }) => ({
		...state,
		items: [...items],
	})),
	on(ingresoActions.unSetItems, (state) => ({ ...state, items: [] }))
);

export function ingresoGastoReducer(state: any, action: Action) {
	return _ingresoGastoReducer(state, action);
}
