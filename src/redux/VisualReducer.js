// selectors
export const getFont = visual => visual.font;

// action name creator
const reducerName = 'visual'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_FONT = createActionName('SET_FONT');

// action creators
export const createAction_addFont = payload => ({ payload, type: SET_FONT });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_FONT:
      return action.payload;
    default:
      return state;
  }
}
