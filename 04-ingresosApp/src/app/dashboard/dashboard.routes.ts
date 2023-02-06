import { Routes } from "@angular/router";
import { DetalleComponent } from "../ingreso/detalle/detalle.component";
import { EstadisticaComponent } from "../ingreso/estadistica/estadistica.component";
import { IngresoComponent } from "../ingreso/ingreso.component";


export const dashboardRoutes: Routes = [
	{ path: '', component: EstadisticaComponent },
	{ path: 'ingresos', component: IngresoComponent },
	{ path: 'detalle', component: DetalleComponent },
]