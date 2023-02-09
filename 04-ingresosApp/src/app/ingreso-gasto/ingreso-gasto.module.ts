import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { OrdenIngresoPipe } from '../pipes/orden-ingreso.pipe';
import { SharedModule } from '../shared/shared.module';
import { DetalleComponent } from './detalle/detalle.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { IngresoGastoComponent } from './ingreso-gasto.component';

@NgModule({
	declarations: [
		DashboardComponent,
		IngresoGastoComponent,
		EstadisticaComponent,
		DetalleComponent,
		OrdenIngresoPipe,
	],
	imports: [CommonModule, ReactiveFormsModule, NgChartsModule, SharedModule, AppRoutingModule],
})
export class IngresoGastoModule {}
