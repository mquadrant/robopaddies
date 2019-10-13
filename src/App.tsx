import React from 'react';
import fetch from 'node-fetch'
import {connect} from 'react-redux';
import MainPage from './containers/MainPage';

import {requestRobots} from './redux/action';

const mapStateToProps = (state:any) => {
  return {
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch:any )=> {
 return {
  requestForRobots: () => dispatch(requestRobots(fetch))
}
}

function App(props:any) {
  return (
    <MainPage {...props}/>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
