import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuario Success',
  props<{ usuario: Usuario }>()
);
export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuarios Error',
  props<{ payload: any }>()
);
