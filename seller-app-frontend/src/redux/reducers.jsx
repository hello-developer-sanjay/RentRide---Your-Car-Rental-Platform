import * as actionTypes from './actionTypes';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case actionTypes.FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_CARS_SUCCESS:

      return {
        ...state,
        cars: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.FETCH_CARS_FAILURE:
      return {
        ...state,
        cars: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
