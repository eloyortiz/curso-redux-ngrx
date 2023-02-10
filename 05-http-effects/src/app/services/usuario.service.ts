import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _url: string = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<any>(`${this._url}/users?delay=3`)
      .pipe(map((resp) => resp['data']));
  }

  getUserById(id: string) {
    return this.http
      .get<any>(`${this._url}/users/${id}?delay=3`)
      .pipe(map((resp) => resp['data']));
  }
}
