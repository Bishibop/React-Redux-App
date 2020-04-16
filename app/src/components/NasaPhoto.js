import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getNasaPhoto } from '../actions/actions';

function NasaPhoto({ photo, getNasaPhoto }) {
  useEffect(() => {
    getNasaPhoto();
  }, []);
  console.log('photo state in the component: ', photo);
  return (
    <div className='nasa-photo-container'>
      <h2>NASA Photo of the Day </h2>
      <h2>{photo.title}</h2>
      <img src={photo.url}/>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  photo: state.photo,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getNasaPhoto })(NasaPhoto);
