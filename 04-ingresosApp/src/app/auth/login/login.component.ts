import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/app.reducer';
import * as ui from 'src/app/shared/ui.actions';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [],
})
export class LoginComponent implements OnInit, OnDestroy {
	loginForm!: FormGroup;
	isLoading: boolean = false;
	uiSubscription$!: Subscription;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router,
		private store: Store<AppState>
	) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['john@doe.net', [Validators.required, Validators.email]],
			password: ['123456', Validators.required],
		});

		this.uiSubscription$ = this.store.select('ui').subscribe((ui) => {
			this.isLoading = ui.isLoading;
		});
	}
	ngOnDestroy(): void {
		this.uiSubscription$.unsubscribe();
	}

	login() {
		if (this.loginForm.invalid) return;

		this.store.dispatch(ui.isLoading());

		// Swal.fire({
		// 	title: 'Loading, please wait...',
		// 	didOpen: () => {
		// 		Swal.showLoading();
		// 	},
		// });

		const { email, password } = this.loginForm.value;
		this.authService
			.loginUser(email, password)
			.then((credentials) => {
				//Swal.close();
				this.store.dispatch(ui.stopLoading());
				this.router.navigate(['/']);
			})
			.catch((err) => {
				this.store.dispatch(ui.stopLoading());
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: err.message.replace('Firebase: ', ''),
				});
			});
	}
}
