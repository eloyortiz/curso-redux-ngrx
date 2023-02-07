import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styles: [],
})
export class SidebarComponent implements OnInit {

	user!: User | any;

	constructor(
		private authService: AuthService,
		private router: Router,
		private store: Store<AppState>
	) {}

	ngOnInit(): void {
		this.store.select('user').subscribe(({ user }) => (this.user = user));
	}

	logout() {
		Swal.fire({
			title: 'Closing session...',
			didOpen: () => {
				Swal.showLoading();
			},
		});
		this.authService
			.logout()
			.then(() => {
				Swal.close();
				this.router.navigate(['/login']);
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: err.message.replace('Firebase: ', ''),
				});
			});
	}
}
