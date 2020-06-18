import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {UsersSelectors} from '../../store/users.selectors';
import {UsersActions} from '../../store/users.actions';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  users$: Observable<string[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(UsersSelectors.selectUsers);
    this.store.dispatch(UsersActions.loadUsers());
  }

}
