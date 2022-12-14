import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {ValidFilter, FILTERS_TYPES} from "../../filter/filter.reducer";
import {AppState} from "../../app.reducer";
import {setFilter} from "../../filter/filter.actions";
import {Todo} from "../models/todo.model";
import {borrarCompletados} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filterSelected!: ValidFilter;
  filtersOption: ValidFilter[] = [FILTERS_TYPES.ALL, FILTERS_TYPES.ACTIVE, FILTERS_TYPES.COMPLETED]
  pendientes!: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(appState => {
      this.filterSelected = appState.filter;
      this.pendientes = appState.todos.filter((todo: Todo) => !todo.completado).length;
    });
  }

  selectFilter(filter: ValidFilter) {
    this.store.dispatch(setFilter({filter}));
  }

  borrarCompletados(): void {
    this.store.dispatch(borrarCompletados());
  }
}
