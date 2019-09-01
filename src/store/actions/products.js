
import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchIngredientsFailed = () => {
  return {
      type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};


export const setIngredients = ( ingredients ) => {
  return {
      type: actionTypes.SET_INGREDIENTS,
      ingredients:ingredients
  };
};

export const initIngredients = () => {
  return dispatch => {
      axios.get( 'https://jsonplaceholder.typicode.com/photos' )
          .then( response => {
             dispatch(setIngredients(response.data));
          } )
          .catch( error => {
              dispatch(fetchIngredientsFailed());
          } );
  };
};