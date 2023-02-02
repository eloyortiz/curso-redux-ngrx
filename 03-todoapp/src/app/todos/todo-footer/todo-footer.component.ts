import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filters: actions.todoFilter[] = ['all','completed','pending'];
  currentFilter: actions.todoFilter = 'all';

  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store
    //   .select('filter')
    //   .subscribe((value) => (this.currentFilter = value));
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter(todo => !todo.completed).length;
    })
  }

  setFilter(filter: actions.todoFilter) {
    this.store.dispatch(actions.setFilter({filter}));
  }
}
