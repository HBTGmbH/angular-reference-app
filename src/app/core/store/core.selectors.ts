import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoreState} from '@core/store';
import {AppState} from '@core/app.state';

const selectFeature = createFeatureSelector<AppState, CoreState>('core');

/**
 * Similar to the core.actions.ts, we group selectors into an object to create
 * simpler imports.
 */
export const CoreSelectors = {
  selectCurrentUser: createSelector(selectFeature, s1 => s1.currentUser)
};
