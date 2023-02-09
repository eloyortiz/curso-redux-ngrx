import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { setItems } from '../ingreso-gasto/ingreso-gasto.actions';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { IngresoGastoService } from '../services/ingreso-gasto.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styles: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
	userSubs$!: Subscription;
	ingresosGastosSubs$!: Subscription;

	constructor(
		private store: Store<AppState>,
		private ingresoGastoService: IngresoGastoService
	) {}

	ngOnInit(): void {
		this.userSubs$ = this.store
			.select('user')
			.pipe(filter((auth) => auth.user !== null))
			.subscribe(({ user }) => {
				this.ingresosGastosSubs$ = this.ingresoGastoService.initIngresosGastosListener(user?.uid).subscribe(ingresosGastosFb => {
					this.store.dispatch(setItems({ items: ingresosGastosFb }))
				});
			});
	}

	ngOnDestroy(): void {
		this.ingresosGastosSubs$.unsubscribe();
		this.userSubs$.unsubscribe();
	}
}
