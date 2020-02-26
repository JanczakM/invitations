// selectors
export const getWeddingDate = wedding => wedding.date;
export const getWeddingTime = wedding => wedding.time;
//export const getWeddingPlace = wedding => wedding.place;
//export const getWeddingStreet = wedding => wedding.street;
//export const getWeddingCity = wedding => wedding.city;

// action name creator
const reducerName = 'wedding'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_DATE = createActionName('SET_DATE');
export const SET_TIME = createActionName('SET_TIME');

// action creators
export const createAction_addDate = payload => ({ payload, type: SET_DATE });
export const createAction_addTime = payload => ({ payload, type: SET_TIME });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        ...action.payload
      };
    case SET_TIME:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
