import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { IngresoGastoService } from '../services/ingreso-gasto.service';

@Component({
	selector: 'app-ingreso-gasto',
	templateUrl: './ingreso-gasto.component.html',
	styles: [],
})
export class IngresoGastoComponent implements OnInit {
	ingresoForm!: FormGroup;
	type: string = 'ingreso';

	constructor(
		private fb: FormBuilder,
		private ingresoGastoService: IngresoGastoService
	) {}

	ngOnInit(): void {
		this.ingresoForm = this.fb.group({
			description: ['', Validators.required],
			amount: ['', [Validators.required, Validators.min(0.01)]],
		});
	}

	save() {
		if (this.ingresoForm.invalid) return;
		const { description, amount } = this.ingresoForm.value;
		const ingresoGasto = new IngresoGasto(description, amount, this.type);
		this.ingresoGastoService
			.crearIngresoGasto(ingresoGasto)
			.then(() => {
				this.ingresoForm.reset();
				Swal.fire('Registro creado',
					description,
				'success')
			}
			)
			.catch((err) => {
				Swal.fire('Error', err.message, 'error');
			});
	}
}
