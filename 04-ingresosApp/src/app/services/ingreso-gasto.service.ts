import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IngresoGasto } from '../models/ingreso-gasto.model';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class IngresoGastoService {
	constructor(
		private firestore: AngularFirestore,
		private authService: AuthService
	) {}

	crearIngresoGasto(ingresoGasto: IngresoGasto) {
		const uid = this.authService.user?.uid;
		return this.firestore
			.doc(`${uid}/ingresos-gastos`)
			.collection('items')
			.add({ ...ingresoGasto });
	}
}
