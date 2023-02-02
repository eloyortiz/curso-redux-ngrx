import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputControl') txtInputControl!: ElementRef;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.chkCompleted.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  startEdit() {
    this.isEditing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputControl.nativeElement.select();
    }, 1);
  }

  finishEditing() {
    this.isEditing = false;

    if (this.txtInput.invalid) {
      return;
    }
    let value = this.txtInput.value.trim();
    if (value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.txtInput.value,
      })
    );
  }

  removeTodo() {
    this.store.dispatch(actions.remove({ id: this.todo.id }));
  }
}
