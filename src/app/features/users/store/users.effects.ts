import {Inject, Injectable} from '@angular/core';
import {RefAppUserService} from '@api/api/refAppUser.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UsersActions} from './users.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    switchMap(() => this.getAllUsers())
  ));


  constructor(private actions$: Actions, private userService: RefAppUserService) {
  }

  /**
   * To keep the effects above a bit more concise, move the API call + error handling into a new
   * method.
   */
  private getAllUsers(): Observable<Action> {
    return this.userService.getAllUsers().pipe(
      map(users => UsersActions.loadUsersSuccess({users})),
      catchError((err: HttpErrorResponse) => {
        return of(UsersActions.loadUsersFailed({errorMessage: err.message}));
      })
    );
  }
}
