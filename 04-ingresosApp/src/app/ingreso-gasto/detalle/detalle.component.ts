import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IngresoGasto } from 'src/app/models/ingreso-gasto.model';
import { IngresoGastoService } from 'src/app/services/ingreso-gasto.service';
import Swal from 'sweetalert2';
import { AppStateWithIngreso } from '../ingreso-gasto.reducer';

@Component({
	selector: 'app-detalle',
	templateUrl: './detalle.component.html',
	styles: [],
})
export class DetalleComponent implements OnInit, OnDestroy {
	ingresosSubs$!: Subscription;
	ingresosGastos: IngresoGasto[] | any[] = [];

	constructor(
		private store: Store<AppStateWithIngreso>,
		private ingresoGastoService: IngresoGastoService
	) {}

	ngOnInit(): void {
		this.ingresosSubs$ = this.store
			.select('ingresosGastos')
			.subscribe(({ items }) => (this.ingresosGastos = items));
	}

	ngOnDestroy(): void {
		this.ingresosSubs$.unsubscribe();
	}

	delete(uid: string) {
		this.ingresoGastoService
			.borrarIngresoGasto(uid)
			.then(() => {
				Swal.fire('Éxito!', 'Registro eliminado', 'success');
			})
			.catch((err) => Swal.fire('Error', err.message, 'error'));
	}
}
