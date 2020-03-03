// selectors
export const getInfo = info => info;

// action name creator
const reducerName = 'info'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_INFO = createActionName('SET_INFO');

// action creators
export const createAction_addInfo = payload => ({ payload, type: SET_INFO });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_INFO:
      return action.payload;
    default:
      return state;
  }
}
