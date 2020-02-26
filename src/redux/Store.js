import {combineReducers, createStore} from 'redux';

import groomNamesReducer from './GroomNamesReducer';
import weddingReducer from './WeddingReducer';

const initialState = {
  template: '',
  font: '',
  groomNames: '',
  wedding: {
    date: Date(),
    time: Date(),
    place: '',
    street: '',
    city: ''
  },
  weddingParty: {
    is: '',
    date: '',
    time: '',
    place: '',
    street: '',
    city: ''
  },
  guests: [],
  contact: {
    brideTel: '',
    brideMail: '',
    groomTel: '',
    groomMail: ''
  },
  info: ''
}

const reducers = {
  groomNames: groomNamesReducer,
  wedding: weddingReducer
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const storeReducer = combineReducers(reducers);

const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
