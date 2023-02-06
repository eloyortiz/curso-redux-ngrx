import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styles: [],
})
export class LoginComponent implements OnInit {
	loginForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: ['john@doe.net', [Validators.required, Validators.email]],
			password: ['123456', Validators.required],
		});
	}

	login() {
		if (this.loginForm.invalid) return;
		const { email, password } = this.loginForm.value;
		this.authService
			.loginUser(email, password)
			.then((credentials) => {
				console.log(credentials);
				this.router.navigate(['/']);
			})
			.catch(console.error);
	}
}
