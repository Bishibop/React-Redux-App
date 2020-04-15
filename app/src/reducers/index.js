import {
  FETCH_NASA_PHOTO_START,
  FETCH_NASA_PHOTO_SUCCESS,
  FETCH_NASA_PHOTO_FAIL
} from '../actions/actions';

const initialState = {
  photo: {},
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NASA_PHOTO_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_NASA_PHOTO_SUCCESS:
      return {
        ...state,
        photo: action.payload,
        isFetching: false,
        error: '',
      };
    case FETCH_NASA_PHOTO_FAIL:
      return {
        ...state,
        // Wouldn't you still set this as well?
        // isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
