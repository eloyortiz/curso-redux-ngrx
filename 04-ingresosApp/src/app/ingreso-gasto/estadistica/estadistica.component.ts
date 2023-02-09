import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChartData, ChartType } from 'chart.js';
import { AppState } from 'src/app/app.reducer';
import { IngresoGasto } from 'src/app/models/ingreso-gasto.model';

@Component({
	selector: 'app-estadistica',
	templateUrl: './estadistica.component.html',
	styles: [],
})
export class EstadisticaComponent implements OnInit {
	contIngresos: number = 0;
	contGastos: number = 0;

	totalIngresos: number = 0;
	totalGastos: number = 0;

	// Doughnut
	public ChartLabels: string[] = ['Ingresos', 'Gastos'];
	public ChartData: ChartData = {
		labels: this.ChartLabels,
		datasets: [],
	};

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store
			.select('ingresosGastos')
			.subscribe(({ items }) => this.generarEstadisticas(items));
	}

	generarEstadisticas(items: IngresoGasto[]) {
		for (const item of items) {
			if (item.type === 'ingreso') {
				this.totalIngresos += item.amount;
				this.contIngresos++;
			} else {
				this.totalGastos += item.amount;
				this.contGastos++;
			}
		}

		this.ChartData.datasets.push({
			data: [this.totalIngresos, this.totalGastos],
		});
	}
}
