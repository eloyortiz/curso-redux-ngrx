import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  @Input() contador!: number;
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  reset() {
    this.contador = 0;
    this.contadorCambio.emit(0);
  }
}
