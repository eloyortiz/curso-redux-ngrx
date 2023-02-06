import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styles: [],
})
export class RegisterComponent implements OnInit {
	registerForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.registerForm = this.fb.group({
			name: ['johndoe', Validators.required],
			email: ['john@doe.net', [Validators.required, Validators.email]],
			password: ['123456', Validators.required],
		});
	}

	createUser() {
		if (this.registerForm.invalid) return;

		const { name, email, password } = this.registerForm.value;
		this.authService
			.createUser(name, email, password)
			.then((credentials) => {
				console.log(credentials);
				this.router.navigate(['/']);
			})
			.catch(console.error);
	}
}
