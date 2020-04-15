import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getNasaPhoto } from '../actions/actions';

function NasaPhoto(props) {
  useEffect(() => {
    props.getNasaPhoto();
  }, []);
  const photo = props.photo;
  console.log('photo state in the component: ', photo);
  return (
    <div>Hello from photo component</div>
  );
}

const mapStateToProps = state => ({
  photo: state.photo,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(mapStateToProps, { getNasaPhoto })(NasaPhoto);
