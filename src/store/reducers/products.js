import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INGREDIENTS:
      console.log(action.ingredients)
      return {
        ...state,
        products: action.ingredients
      };
    
    default:
      return state;
  }
};

export default productReducer;
