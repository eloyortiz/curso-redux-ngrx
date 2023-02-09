import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{
		canLoad: [AuthGuard],
		path: '',
		loadChildren: () =>
			import('./ingreso-gasto/ingreso-gasto.module').then(
				(m) => m.IngresoGastoModule
			),
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
