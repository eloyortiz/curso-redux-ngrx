export class User {

	static fromFirebase({
		email,
		name,
		uid,
	}: {
		email: string;
		name: string;
		uid: string;
	}) {
		return new User(uid, name, email);
	}

	constructor(
		public uid: string | any,
		public name: string | any,
		public email: string | any
	) {}
}
