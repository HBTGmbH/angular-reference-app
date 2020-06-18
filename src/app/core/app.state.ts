import {CoreState} from '@core/store';
import {UsersState} from '../features/users/store/users.state';

/**
 * This interface allows typesafe 'createFeatureSelector'
 */
export interface AppState {
  core: CoreState;
  users: UsersState;
}
