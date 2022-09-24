import {Component, OnInit} from '@angular/core';
import {Filter, FILTERS_TYPES} from "../../filter/filter.reducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {setFilter} from "../../filter/filter.actions";
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filterSelected!: Filter;
  filtersOption: Filter[] = [FILTERS_TYPES.ALL, FILTERS_TYPES.ACTIVE, FILTERS_TYPES.COMPLETED]
  pendientes!: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(appState => {
      this.filterSelected = appState.filter;
      this.pendientes = appState.todos.filter((todo: Todo) => !todo.completado).length;
    });
  }

  selectFilter(filter: Filter) {
    this.store.dispatch(setFilter({filter}));
  }
}
