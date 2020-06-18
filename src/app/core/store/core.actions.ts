import {createAction, props} from '@ngrx/store';

interface SetCurrentEmailProps {
  email: string;
}

/**
 * Here we defines our ngrx actions. Actions are wrapped into an object to allow easy, auto-createable imports
 * from @core/store. With this capsule objects of our actions, we can import them like this:
 *
 * import {CoreActions} from '@core/store'
 *
 * And then use them like this
 *
 * this.store.dispatch(CoreActions.setCurrentUser({currentUser}))
 *
 * Which makes for an overall smoother workflow compared to importing each actions seperately.
 */
export const CoreActions = {

  // A note on naming:
  // * For actions that change some value in your state, name them like the value in your state. This will save
  //   you some trouble later on and allows for smooth destructuring and object-spread operations
  // * Be descriptive in your actions, but use a common pattern throughout the app. Good prefixes are
  //   * 'set' if you change a value in the store
  //   * 'load' if your action triggers an effect that loads data
  //   * 'save' or 'delete' if your action triggers a safe or delete API operation
  setCurrentUser: createAction(
    '[Core] set current user', // [Core] is the name of the slice. Makes actions easily recognizable
    props<{ currentUser: string }>()  // We are using an implicit interface here. An alternative with an explicit interface is below
  ),
  // This is the version with an explicit interface delaration. Implicit interface declaration are preferred most of the time
  setCurrentEmail: createAction('[Core] set current email', props<SetCurrentEmailProps>())
};
