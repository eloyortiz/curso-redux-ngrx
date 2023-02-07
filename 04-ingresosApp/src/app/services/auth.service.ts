import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../app.reducer';
import * as authActions from '../auth/auth.actions';
import { User } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	userSubscription$!: Subscription;

	constructor(
		public auth: AngularFireAuth,
		public firestore: AngularFirestore,
		private store: Store<AppState>
	) {}

	initAuthListener() {
		this.auth.authState.subscribe((fuser) => {
			if (fuser) {
				this.userSubscription$ = this.firestore
					.doc(`${fuser.uid}/usuario`)
					.valueChanges()
					.subscribe((firestoreUser: any) => {
						const user = User.fromFirebase(firestoreUser);
						this.store.dispatch(authActions.setUser({ user }));
					});
			} else {
				if (this.userSubscription$) this.userSubscription$.unsubscribe();
				this.store.dispatch(authActions.unSetUser());
			}
		});
	}

	createUser(name: string, email: string, password: string) {
		return this.auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ user }) => {
				const newUser = new User(user?.uid, name, user?.email);
				return this.firestore.doc(`${user?.uid}/usuario`).set({ ...newUser });
			});
	}

	loginUser(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	isAuth() {
		return this.auth.authState.pipe(map((fuser) => fuser != null));
	}
}
