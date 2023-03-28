import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  isLoading: boolean = false;
  error!: any;

  constructor(
    private store: Store<AppState>,
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      this.usuarios = users;
      this.isLoading = loading;
      this.error = error;
    });

    this.store.dispatch(cargarUsuarios());
  }

  getUser(id: number | undefined) {
    if (!id) return;
    this.router.navigate([`usuario/${id}`]);
  }
}
