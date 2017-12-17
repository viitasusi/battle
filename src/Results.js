import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import api from './api.js';
import {Link} from 'react-router-dom'
import PlayerPreview from './PlayerPreview.js'
import Loading from './Loading.js'

function Profile(props) {
  var info = props.info;

  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      Followers: {info.followers}
      Following: {info.following}
    </PlayerPreview>
  )
}

function Player(props) {
  return (
    <div>
      <h1>{props.label}</h1>
      <h3>Score: {props.score}</h3>
      <Profile info={props.profile}/>
    </div>
  )
}

Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
}

class Results extends Component {
  constructor(props) {
      super(props)

      this.state = {
        winner: null,
        loser: null,
        error: null,
        loading: true
      }
  }
  componentDidMount() {
    var players = queryString.parse(this.props.location.search)
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function(results) {
      if(results === null) {
        return this.setState(function() {
          return {
            error: 'Looks like there was an error.',
            loading: false
          }
        })
      }
      this.setState(function() {
        return {
          error: null,
          loading: false,
          winner: results[0],
          loser: results[1]
        }
      })
    }.bind(this))
  }
  render() {
    var error = this.state.error
    var winner = this.state.winner
    var loser = this.state.loser
    var loading = this.state.loading

    if(loading === true) {
      return <Loading />
    }

    if(error) {
      return (
        <div>
          <p>{error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return(
      <div>
        <Player
          label='Winner'
          score={winner.score}
          profile={winner.profile}
        />
        <Player
          label='Loser'
          score={loser.score}
          profile={loser.profile}
        />
      </div>
    )
  }
}

export default Results;
