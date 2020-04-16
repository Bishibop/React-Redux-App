import axios from 'axios';

function formattedDate() {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
}

const apiKey = 'rbS9YSQx5nnvUtqosZzRi4MwKDgbV6CjnOlOq3a6';

export const FETCH_NASA_PHOTO_START = 'FETCH_NASA_PHOTO_START';
export const FETCH_NASA_PHOTO_SUCCESS = 'FETCH_NASA_PHOTO_SUCCESS';
export const FETCH_NASA_PHOTO_FAIL = 'FETCH_NASA_PHOTO_FAIL';

export const getNasaPhoto = () => dispatch => {
  dispatch({ type: FETCH_NASA_PHOTO_START });
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate()}`)
    // .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=2020-4-14`)
    .then(res => {
      return dispatch({ type: FETCH_NASA_PHOTO_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_NASA_PHOTO_FAIL, payload: err}));
};
