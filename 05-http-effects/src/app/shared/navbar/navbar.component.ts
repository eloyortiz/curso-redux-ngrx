import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  idUser: string = '1';
  userRoute: string = `usuario/${this.idUser}`;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irUsuario(id: string) {
    if (!id) return;
    this.idUser = id;
    this.userRoute = `usuario/${this.idUser}`;
    this.router.navigate([this.userRoute]);
  }
}
