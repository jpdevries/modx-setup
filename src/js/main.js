import { combineReducers, createStore } from 'redux';

import actions from './model/actions';

import SetupReducer from './model/reducers';

//import lazyLoadScript from 'lazyLoadScript';

/*
function getJSON(endpoint) {
  return new Promise(function(resolve, reject) {

    var request = new Request(endpoint, {
    	method: 'GET',
    	//mode: 'cors',
    	//redirect: 'follow',
    	headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    });

    fetch(endpoint).then((response) => response.json()).then((json) => {
      resolve(json)
    })
  })
}

getJSON('/api/extras/desires').then((json) => {
  console.log(json);
});
*/

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = require('./model/store');

store.dispatch(actions.fetchDesires());
store.dispatch(actions.fetchPresets());

store.dispatch(actions.fetchCategories());

store.dispatch(actions.fetchProviders()).then((providers) => {
  store.dispatch(actions.fetchExtras('modmore'));
  store.dispatch(actions.fetchExemptions('modmore'));
});


// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)
