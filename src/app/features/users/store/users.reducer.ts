import {Action, createReducer, on} from '@ngrx/store';
import {defaultUsersStore, UsersState} from './users.state';
import {UsersActions} from './users.actions';

/**
 * If your 'on' gets a bit larger, like this one, which has two reset two states next to setting the users,
 * feel free to move the whole 'on' handler into a seperate method. But don't export it.
 *
 * If you are testing your store, don't get tempted to test these methods. Always test the whole reducer!
 */
function handleLoadUsersSuccess(state: UsersState, users: string[]): UsersState {
  return {
    ...state,
    usersLoadingError: '',
    usersLoading: false,
    users
  };
}

function handleLoadUsersFailed(state: UsersState, usersLoadingError: string): UsersState {
  return {
    ...state,
    usersLoadingError,
    usersLoading: false,
    users: [],
  };
}

const reducer = createReducer(defaultUsersStore(),
  on(UsersActions.loadUsers, (state) => ({...state, usersLoading: true, usersLoadingError: ''})),
  on(UsersActions.loadUsersSuccess, (state, {users}) => handleLoadUsersSuccess(state, users)),
  on(UsersActions.loadUsersFailed, (state, {errorMessage}) => handleLoadUsersFailed(state, errorMessage)),
);

export function usersReducer(state: UsersState, action: Action): UsersState {
  return reducer(state, action);
}
