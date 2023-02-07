import { Routes } from '@angular/router';
import { DetalleComponent } from '../ingreso-gasto/detalle/detalle.component';
import { EstadisticaComponent } from '../ingreso-gasto/estadistica/estadistica.component';
import { IngresoGastoComponent } from '../ingreso-gasto/ingreso-gasto.component';

export const dashboardRoutes: Routes = [
	{ path: '', component: EstadisticaComponent },
	{ path: 'ingresos', component: IngresoGastoComponent },
	{ path: 'detalle', component: DetalleComponent },
];
