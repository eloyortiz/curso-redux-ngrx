import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subscription } from 'rxjs';
import { AppState } from '../app.reducer';
import { IngresoGastoService } from '../services/ingreso-gasto.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styles: [],
})
export class DashboardComponent implements OnInit, OnDestroy {
	userSubs$!: Subscription;

	constructor(
		private store: Store<AppState>,
		private ingresoGastoService: IngresoGastoService
	) {}

	ngOnInit(): void {
		this.userSubs$ = this.store
			.select('user')
			.pipe(filter((auth) => auth.user != null))
			.subscribe(({ user }) => {
				console.log('user :>> ', user);
				this.ingresoGastoService.initIngresosGastosListener(user?.uid);
			});
	}

	ngOnDestroy(): void {
		this.userSubs$.unsubscribe();
	}
}
