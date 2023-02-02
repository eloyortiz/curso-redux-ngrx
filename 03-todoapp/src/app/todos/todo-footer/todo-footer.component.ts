import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { setFilter, todoFilter } from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filters: todoFilter[] = ['all', 'completed', 'pending'];
  currentFilter: todoFilter = 'all';

  pendingTodos: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  setFilter(filter: todoFilter) {
    this.store.dispatch(setFilter({ filter }));
  }

  clearCompleted() {
    this.store.dispatch(clearCompleted());
  }
}
