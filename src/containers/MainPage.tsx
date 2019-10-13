import React ,{useState,useEffect}from 'react';
import CardList from '../components/CardList'
import SearchBar from '../components/SearchBar'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';



export default function MainPage(props:any) {
  const {requestForRobots,robots} = props;
  const [filteredRobots, setFilteredRobots] = useState([]);
  
  useEffect(()=>{ 
    requestForRobots();
  },[requestForRobots])

  useEffect(()=>{ 
    setFilteredRobots(robots);
  },[robots])

  const searchHandler = (e:React.ChangeEvent<HTMLInputElement>):void=>{ 
    filterRobots(e.target.value);
  }

  const filterRobots = (term:string)=>{
    let re = new RegExp(term, "gi");
    setFilteredRobots(robots.filter((robot:any)=>{
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
          {filteredRobots.length?(
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>):null}
        </div>
  )
    
}
