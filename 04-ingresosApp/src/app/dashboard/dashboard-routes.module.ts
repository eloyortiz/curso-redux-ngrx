import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

const childRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
		children: dashboardRoutes,
		// canActivate: [AuthGuard],
	},
];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(childRoutes)],
	exports: [RouterModule],
})
export class DashboardRoutesModule {}
