import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(public auth: AngularFireAuth) {}

	createUser(name: string, email: string, password: string) {
		return this.auth.createUserWithEmailAndPassword(email, password);
	}

	loginUser(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}
}
