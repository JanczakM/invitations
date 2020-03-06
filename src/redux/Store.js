import {combineReducers, createStore} from 'redux';

import groomNamesReducer from './GroomNamesReducer';
import weddingReducer from './WeddingReducer';
import visualReducer from './VisualReducer';
import weddingPartyReducer from './WeddingPartyReducer';
import infoReducer from './InfoReducer';

const initialState = {
  visual: {
    template: '',
    font: 'Marck Script'
  },
  groomNames: {
    she: '',
    he: ''
  },
  wedding: {
    date: new Date(),
    time: new Date(),
    place: '',
    street: '',
    city: ''
  },
  weddingParty: {
    is: 'true',
    place: '',
    street: '',
    city: ''
  },
  info: ''
}

const reducers = {
  groomNames: groomNamesReducer,
  wedding: weddingReducer,
  visual: visualReducer,
  weddingParty: weddingPartyReducer,
  info: infoReducer
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
