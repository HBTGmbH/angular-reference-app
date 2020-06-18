import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '@core/app.state';
import {UsersState} from './users.state';

const selectFeature = createFeatureSelector<AppState, UsersState>('users');

export const UsersSelectors = {
  selectUsers: createSelector(selectFeature, s1 => s1.users)
};
