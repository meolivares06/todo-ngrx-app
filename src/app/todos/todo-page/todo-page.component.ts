import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {toggleAll} from '../todo.actions';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  chckToggleAll!: FormControl;

  constructor(private store: Store<AppState>) {
    this.chckToggleAll = new FormControl();
  }

  ngOnInit(): void {
    this.chckToggleAll.valueChanges.subscribe(check => {
      this.store.dispatch(toggleAll({completado: check}));
    });
  }

}
