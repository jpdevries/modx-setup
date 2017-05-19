import { combineReducers, createStore } from 'redux';

import actions from './actions';

const initialDesireState = [

];

function desires(state = initialDesireState, action) {
  switch (action.type) {
    case actions.FETCH_DESIRES_SUCCESS:
    console.log('actions.FETCH_DESIRES_SUCCESS', actions.FETCH_DESIRES_SUCCESS);
    console.log(action.desires);
    return Object.keys(action.desires).map((desire) => (
      Object.assign({key: desire}, action.desires[desire], {})
    ))

    return action.desires;
    break;
  }

  return state;
}

const initialPresetsState = [

];

function presets(state = initialPresetsState, action) {
  switch (action.type) {
    case actions.FETCH_PRESETS_SUCCESS:
    return action.presets;
    break;
  }

  return state;
}

const initialProvidersState = [

];

function providers(state = initialProvidersState, action) {
  switch (action.type) {
    case actions.FETCH_PROVIDERS_SUCCESS:
    return action.providers;
    break;
  }

  return state;
}

const initialCategoriesState = [

];

function categories(state = initialCategoriesState, action) {
  console.log(action.type);
  switch (action.type) {
    case actions.FETCH_CATEGORIES_SUCCESS:
    console.log('yo', action.categories);
    return action.categories;
    break;

    case actions.FETCH_CATEGORIES_ERROR:
    console.error(action.error);
  }

  return state;
}

const initialExtrasState = [

];

function extras(state = initialExtrasState, action) {
  switch (action.type) {
    case actions.FETCH_EXTRAS_SUCCESS:

    const extras = Object.keys(action.extras.extras).map((key) => (
      Object.assign({"key": key}, action.extras.extras[key], {})
    ));

    console.log(extras);

    return Object.assign({}, state, {
      [action.extras.provider]: extras
    });
    break;

    case actions.FETCH_CATEGORIES_ERROR:
    console.error(action.error);
  }

  return state;
}

const initialExemptionsState = [

];

function exemptions(state = initialExemptionsState, action) {
  switch (action.type) {
    case actions.FETCH_EXEMPTIONS_SUCCESS:
    return action.exemptions;
    break;

    case actions.FETCH_EXEMPTIONS_ERROR:
    console.error(action.error);
  }

  return state;
}

const SetupReducer = combineReducers({
  desires,
  presets,
  providers,
  categories,
  extras,
  exemptions
});

export default SetupReducer;
