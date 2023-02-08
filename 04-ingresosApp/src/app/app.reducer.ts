import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as auth from './auth/auth.reducer';
import * as ingresoGasto from './ingreso-gasto/ingreso-gasto.reducer';

export interface AppState {
	ui: ui.State;
	user: auth.State;
	ingresosGastos: ingresoGasto.State
}

export const appReducers: ActionReducerMap<AppState> = {
	ui: ui.uiReducer,
	user: auth.authReducer,
	ingresosGastos: ingresoGasto.ingresoGastoReducer,
};
