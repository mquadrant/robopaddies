import React ,{useState,useEffect}from 'react';
import {robots} from './robots'
import CardList from './components/CardList'
import SearchBar from './components/SearchBar'
import Scroll from './components/Scroll'
import ErrorBoundry from './components/ErrorBoundry';

function App() {
  const [filteredRobots, setFilteredRobots] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>{ 
      setFilteredRobots(users)
    })
  },[])
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
    !setFilteredRobots.length?(
      <div className="text-center my-12">
        <h1 className="text-5xl my-8">ROBOPADDIES</h1>
        </div>
        ):(
          <div className="app-content">
          <div className="text-center my-12">
          <h1 className="text-5xl my-8">ROBOPADDIES</h1>
          <SearchBar searchChange={searchHandler}/>
          </div>
          <hr className="border-green-200"/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
        )
  )
    
}

export default App;