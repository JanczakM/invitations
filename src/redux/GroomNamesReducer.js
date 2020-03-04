// selectors
export const getGroomNames = names => names;

// action name creator
const reducerName = 'groomNames'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_GROOM_NAMES_SHE = createActionName('SET_GROOM_NAMES_SHE');
export const SET_GROOM_NAMES_HE = createActionName('SET_GROOM_NAMES_HE');

// action creators
export const createAction_addGroomNamesShe = payload => ({ payload, type: SET_GROOM_NAMES_SHE });
export const createAction_addGroomNamesHe = payload => ({ payload, type: SET_GROOM_NAMES_HE });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_GROOM_NAMES_SHE:
    return {
      ...state,
      ...action.payload
    };
    case SET_GROOM_NAMES_HE:
    return {
      ...state,
      ...action.payload
    };
    default:
      return state;
  }
}
