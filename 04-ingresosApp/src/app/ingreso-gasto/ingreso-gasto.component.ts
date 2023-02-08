import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as ui from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';
import { AppState } from '../app.reducer';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { IngresoGastoService } from '../services/ingreso-gasto.service';

@Component({
	selector: 'app-ingreso-gasto',
	templateUrl: './ingreso-gasto.component.html',
	styles: [],
})
export class IngresoGastoComponent implements OnInit, OnDestroy {
	ingresoForm!: FormGroup;
	type: string = 'ingreso';
	isLoading: boolean = false;
	uiSubscription$!: Subscription;

	constructor(
		private fb: FormBuilder,
		private ingresoGastoService: IngresoGastoService,
		private store: Store<AppState>
	) {}

	ngOnInit(): void {
		this.ingresoForm = this.fb.group({
			description: ['', Validators.required],
			amount: ['', [Validators.required, Validators.min(0.01)]],
		});
		this.uiSubscription$ = this.store
			.select('ui')
			.subscribe((ui) => (this.isLoading = ui.isLoading));
	}

	ngOnDestroy(): void {
		this.uiSubscription$.unsubscribe();
	}

	save() {
		if (this.ingresoForm.invalid) return;

		this.store.dispatch(ui.isLoading());

		const { description, amount } = this.ingresoForm.value;
		const ingresoGasto = new IngresoGasto(description, amount, this.type);
		
		this.ingresoGastoService
			.crearIngresoGasto(ingresoGasto)
			.then(() => {
				this.ingresoForm.reset();
				Swal.fire('Registro creado', description, 'success');
			})
			.catch((err) => {
				Swal.fire('Error', err.message, 'error');
			})
			.finally(() => {
				this.store.dispatch(ui.stopLoading());
			});
	}
}
