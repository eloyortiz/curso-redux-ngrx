import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './app.reducer';
import { AuthModule } from './auth/auth.module';
import { IngresoGastoModule } from './ingreso-gasto/ingreso-gasto.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		AuthModule,
		BrowserModule,
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
