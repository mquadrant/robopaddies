import React ,{useState,useEffect}from 'react';
import {connect} from 'react-redux';
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import Scroll from './components/Scroll'
import ErrorBoundry from './components/ErrorBoundry';

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
  const {requestForRobots,robots} = props;
  const [filteredRobots, setFilteredRobots] = useState([]);
  
  useEffect(()=>{ 
    requestForRobots();
  },[requestForRobots])

  useEffect(()=>{ 
    setFilteredRobots(robots);
  },[robots])

  const searchHandler = (e)=>{ 
    filterRobots(e.target.value);
  }

  const filterRobots = (term)=>{
    let re = new RegExp(term, "gi");
    setFilteredRobots(robots.filter(robot=>{
      return re.test(robot.name) || re.test(robot.email)
    }))
  }
  
  return (
          <div className="app-content">
            <div className="text-center my-12">
            <h1 className="text-5xl my-8">ROBOPADDIES</h1>
            <SearchBar searchChange={searchHandler}/>
            </div>
          <hr className="border-green-200"/>
          {setFilteredRobots.length?(
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>):null}
        </div>
  )
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);