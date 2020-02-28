// selectors
export const getFont = visual => visual.font;
export const getBcg = visual => visual.template;

// action name creator
const reducerName = 'visual'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_FONT = createActionName('SET_FONT');
export const SET_TEMPLATE = createActionName('SET_TEMPLATE');

// action creators
export const createAction_addFont = payload => ({ payload, type: SET_FONT });
export const createAction_addBcg = payload => ({ payload, type: SET_TEMPLATE });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_FONT:
      return {
        ...state,
        ...action.payload
      };
    case SET_TEMPLATE:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
