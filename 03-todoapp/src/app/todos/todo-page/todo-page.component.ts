import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {

  isCompletedAll: boolean = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.isCompletedAll = !this.isCompletedAll;
    this.store.dispatch(actions.toggleAll({ completed: this.isCompletedAll }));
  }
}
