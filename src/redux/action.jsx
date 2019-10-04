import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_ERROR} from "./types";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const pendingRequestRobots = ()=>{
  return {type:REQUEST_ROBOTS_PENDING}
}
export const errorRequestRobots = (error)=>{
  return {type:REQUEST_ROBOTS_ERROR,
  payload:error}
}
export const successRequestRobots = (users)=>{
  return {type:REQUEST_ROBOTS_SUCCESS
    ,payload:users}
}

export const requestRobots = () => (dispatch)=>{
    dispatch(pendingRequestRobots());
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>dispatch(successRequestRobots(data)))
    .catch(error=> dispatch(errorRequestRobots(error)))
}
