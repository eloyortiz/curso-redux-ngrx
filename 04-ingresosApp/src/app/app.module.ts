import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgChartsModule } from 'ng2-charts';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './ingreso-gasto/detalle/detalle.component';
import { EstadisticaComponent } from './ingreso-gasto/estadistica/estadistica.component';
import { IngresoGastoComponent } from './ingreso-gasto/ingreso-gasto.component';
import { OrdenIngresoPipe } from './pipes/orden-ingreso.pipe';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		IngresoGastoComponent,
		EstadisticaComponent,
		DetalleComponent,

		OrdenIngresoPipe,
	],
	imports: [
		AppRoutingModule,
		AuthModule,
		SharedModule,
		BrowserModule,
		NgChartsModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		StoreModule.forRoot(appReducers),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: !environment.production,
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
