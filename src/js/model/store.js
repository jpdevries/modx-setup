import SetupReducer from './reducers';

const redux = require('redux'),
createStore = redux.createStore,
applyMiddleware = redux.applyMiddleware,
thunk = require('redux-thunk').default,
reducers = require('./reducers'),
store = createStore(SetupReducer, applyMiddleware(thunk));



module.exports = store;
