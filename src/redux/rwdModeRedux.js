// selector
export const getRwdMode = ({ rwdMode }) => rwdMode;

// action name creator
const reducerName = 'RWDMODE';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
const SET_RWD_MODE = createActionName('SET_RWD_MODE');

// action
export const setRwdMode = payload => ({ payload, type: SET_RWD_MODE });

// reducer

const rwdReducer = (statePart = 'desktop', action = {}) => {
  switch (action.type) {
    case SET_RWD_MODE: {
      return action.payload;
    }
    default:
      return statePart;
  }
};

export default rwdReducer;
