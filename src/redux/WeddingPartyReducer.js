// selectors
export const getIsWedding = weddingParty => weddingParty.is;

// action name creator
const reducerName = 'weddingParty'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_ISWEDDING = createActionName('SET_ISWEDDING');

// action creators
export const createAction_addIsWedding = payload => ({ payload, type: SET_ISWEDDING });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_ISWEDDING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
