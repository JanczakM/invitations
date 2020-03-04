import {combineReducers, createStore} from 'redux';

import groomNamesReducer from './GroomNamesReducer';
import weddingReducer from './WeddingReducer';
import visualReducer from './VisualReducer';
import weddingPartyReducer from './WeddingPartyReducer';
import infoReducer from './InfoReducer';

const initialState = {
  visual: {
    template: 'https://i.postimg.cc/CxWPscr5/bcg1.jpg',
    font: 'Marck Script'
  },
  groomNames: {
    she: 'Anna Luberadzka-Kamińska',
    he: 'Sebastian Szczepaniak'
  },
  wedding: {
    date: Date(),
    time: Date(),
    place: 'A',
    street: 'A',
    city: 'A'
  },
  weddingParty: {
    is: 'true',
    place: 'Restauracja ABC',
    street: 'Krotoszyńska',
    city: 'Warszawa'
  },
  info: 'abc'
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
