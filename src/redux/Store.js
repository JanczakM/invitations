import {combineReducers, createStore} from 'redux';

import groomNamesReducer from './GroomNamesReducer';
import weddingReducer from './WeddingReducer';
import visualReducer from './VisualReducer';
import weddingPartyReducer from './WeddingPartyReducer';
import infoReducer from './InfoReducer';

const initialState = {
  visual: {
    template: 'bcg3.png',
    font: 'Courgette'
  },
  groomNames: 'Gosia i Kuba',
  wedding: {
    date: Date(),
    time: Date(),
    place: 'USC Warszawa-Wilanów',
    street: 'Batuty 135',
    city: 'Warszawa'
  },
  weddingParty: {
    is: 'true',
    place: 'Restauracja ABC',
    street: 'atuty 135',
    city: 'Warszawa'
  },
  info: 'Tu znajdą się dodatkowe informacje. Lorem i psum, .oinoinl.oinonoin. oinoijoij. kkkkk. jinin'
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
