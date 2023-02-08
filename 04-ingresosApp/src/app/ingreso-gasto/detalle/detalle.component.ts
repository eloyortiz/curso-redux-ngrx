import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, tap } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import { IngresoGasto } from 'src/app/models/ingreso-gasto.model';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
	ingresosSubs$!: Subscription;
	ingresosGastos: IngresoGasto[] | any[] = [];

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.ingresosSubs$ = this.store
			.select('ingresosGastos')
			.subscribe(({ items }) => (this.ingresosGastos = items));
	}

	ngOnDestroy(): void {
		this.ingresosSubs$.unsubscribe();
	}

	delete(uid: string) {
		console.log(uid);
	}
}
