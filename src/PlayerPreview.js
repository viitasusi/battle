import React, { Component } from 'react';
import PropTypes from 'prop-types';

function PlayerPreview(props) {
  return(
    <div>
      <img className='avatar' src={props.avatar} />
      <h2 className='username'>@{props.username}</h2>
      {props.children}
    </div>
  )
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default PlayerPreview;
