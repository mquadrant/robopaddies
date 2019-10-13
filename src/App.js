import React from 'react';
import {connect} from 'react-redux';
import MainPage from './containers/MainPage';

import {requestRobots} from './redux/action';

const mapStateToProps = state => {
  return {
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = dispatch => {
 return {
  requestForRobots: () => dispatch(requestRobots())
}
}

function App(props) {
  return (
    <MainPage {...props}/>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
