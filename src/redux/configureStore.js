/*When creating a store, its useful to define a function that configures the store because this function will be called at the applications entry point 
- this way the store will get configured when the application starts up
*/

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; //  warns us if we accidentaly mutate redux state

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())),
  );
}
