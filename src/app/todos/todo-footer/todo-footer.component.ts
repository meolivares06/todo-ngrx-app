import {Component, OnInit} from '@angular/core';
import {Filter, FILTERS_TYPES} from "../../filter/filter.reducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {setFilter} from "../../filter/filter.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  filterSelected!: Filter;
  filtersOption: Filter[] = [FILTERS_TYPES.ALL, FILTERS_TYPES.ACTIVE, FILTERS_TYPES.COMPLETED]

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.filterSelected = filter;
    });
  }

  selectFilter(filter: Filter) {
    this.store.dispatch(setFilter({filter}));
  }
}
