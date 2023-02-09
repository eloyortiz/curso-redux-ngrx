import { Pipe, PipeTransform } from '@angular/core';
import { IngresoGasto } from '../models/ingreso-gasto.model';

@Pipe({
	name: 'ordenIngreso',
})
export class OrdenIngresoPipe implements PipeTransform {
	transform(items: IngresoGasto[] | any): IngresoGasto[] | any {
		//return items.slice().sort((a: any, b: any) => (a.type === 'ingreso' ? -1 : 1));
		return [...items].sort((a: any, b: any) => (a.type === 'ingreso' ? -1 : 1));
	}
}
