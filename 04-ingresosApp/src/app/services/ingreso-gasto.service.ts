import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
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

	initIngresosGastosListener(uid: string) {
		return this.firestore
			.collection(`${uid}/ingresos-gastos/items`)
			.snapshotChanges()
			.pipe(
				map((snapshot) =>
					snapshot.map((doc) => ({
						uid: doc.payload.doc.id,
						...(doc.payload.doc.data() as any),
					}))
				)
			);
	}

	crearIngresoGasto(ingresoGasto: IngresoGasto) {
		const uid = this.authService.user?.uid;
		return this.firestore
			.doc(`${uid}/ingresos-gastos`)
			.collection('items')
			.add({ ...ingresoGasto });
	}

	borrarIngresoGasto(uidItem: string) {
		const uidUser = this.authService.user?.uid;
		return this.firestore
			.doc(`${uidUser}/ingresos-gastos/items1/${uidItem}1`).delete();
	}
}
