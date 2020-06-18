import {Action, createReducer, on} from '@ngrx/store';
import {CoreState, defaultCoreState} from '@core/store/core.state';
import {CoreActions} from '@core/store/core.actions';

const reducer = createReducer(defaultCoreState(),
  on(CoreActions.setCurrentUser, (state, {currentUser}) => ({...state, currentUser}))
);

export function coreReducer(state: CoreState, action: Action): CoreState {
  return reducer(state, action);
}
