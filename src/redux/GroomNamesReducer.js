// selectors
export const getGroomNames = names => names;

// action name creator
const reducerName = 'groomNames'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_GROOM_NAMES = createActionName('SET_GROOM_NAMES');

// action creators
export const createAction_addGroomNames = payload => ({ payload, type: SET_GROOM_NAMES });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_GROOM_NAMES:
      return action.payload;
    default:
      return state;
  }
}
