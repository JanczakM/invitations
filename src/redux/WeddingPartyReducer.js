// selectors
export const getIsWedding = weddingParty => weddingParty.is;
export const getWeddingPartyPlace = weddingParty => weddingParty.place;
export const getWeddingPartyStreet = weddingParty => weddingParty.street;
export const getWeddingPartyCity = weddingParty => weddingParty.city;

// action name creator
const reducerName = 'weddingParty'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_ISWEDDING = createActionName('SET_ISWEDDING');
export const SET_WPPLACE = createActionName('WPPLACE');
export const SET_WPSTREET = createActionName('WPSTREET');
export const SET_WPCITY = createActionName('WPCITY');

// action creators
export const createAction_addIsWedding = payload => ({ payload, type: SET_ISWEDDING });
export const createAction_addWPPlace = payload => ({ payload, type: SET_WPPLACE });
export const createAction_addWPStreet= payload => ({ payload, type: SET_WPSTREET });
export const createAction_addWPCity = payload => ({ payload, type: SET_WPCITY });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_ISWEDDING:
      return {
        ...state,
        ...action.payload
      };
    case SET_WPPLACE:
      return {
        ...state,
        ...action.payload
      };
    case SET_WPSTREET:
      return {
        ...state,
        ...action.payload
      };
    case SET_WPCITY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
