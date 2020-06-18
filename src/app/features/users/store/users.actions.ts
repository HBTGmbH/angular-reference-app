import {createAction, createFeatureSelector, createSelector, props} from '@ngrx/store';
import {AppState} from '@core/app.state';
import {UsersState} from './users.state';


export const UsersActions = {
  /**
   * For each API call, we usually want to create 3 actions.
   * * The loadUsers action will trigger the API call and toggle the loading flag in the store
   * * the loadUsersSuccess action indicates a successful API call, setting loading = false and adding the users to the store
   * * The loadUsersFailed is not mandatory but highly recommended. It allows you to notify the user about an error.
   *
   * There are multiple concepts to do this. You may also want to use an application-wide service that shows a toast-error
   * when an error happens. Nontheless you always want to show some sort of loading or progress indicator. Always keep
   * your user informed on what is happening. Feedback is key!
   */
  loadUsers: createAction('[Users] koad users'),
  loadUsersSuccess: createAction('[Users] load users success', props<{users: string[]}>()),
  loadUsersFailed: createAction('[Users] load users failed', props<{errorMessage: string}>()),
};
