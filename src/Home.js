import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Github Battle your friends...</h1>

        <Link classname='button' to='/battle'>
          Battle
        </Link>
      </div>
    )
  }
}

export default Home
