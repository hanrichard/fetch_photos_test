// import * as actionTypes from '../actions/actionTypes';

// const initialState = {
//   products: []
// };

// const productReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.PHOTOS_FETCH:
//       console.log(action.photos)
//       return {
//         ...state,
//         products: action.photos
//       };
//     }
//     return state;
// };

// export default productReducer;

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  photos: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.PHOTOS_FETCH:
    return setPhotos(state, action);
  }
    return state;
}

function setPhotos(state, action) {
  return {
    ...state,
    photos: action.photos
  }
}

