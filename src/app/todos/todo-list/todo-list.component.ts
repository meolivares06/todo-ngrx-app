import {Component, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {Filter} from "../../filter/filter.reducer";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: Filter;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.filtroActual = filter;
    });
  }

}
