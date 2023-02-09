import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/models/user.model';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styles: [],
})
export class NavbarComponent implements OnInit {
	user!: User | any;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.select('user').subscribe(({ user }) => (this.user = user));
	}
}
