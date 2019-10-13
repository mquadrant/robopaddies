import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_PENDING, 
  REQUEST_ROBOTS_ERROR} from "./types";

export const setSearchField = (text:string) => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const pendingRequestRobots = ()=>{
  return {type:REQUEST_ROBOTS_PENDING}
}
export const errorRequestRobots = (error:string)=>{
  return {type:REQUEST_ROBOTS_ERROR,
  payload:error}
}
export const successRequestRobots = (users:Array<any>)=>{
  return {type:REQUEST_ROBOTS_SUCCESS
    ,payload:users}
}

export const requestRobots = (fetch:Function) => (dispatch:any)=>{
    dispatch(pendingRequestRobots());
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res:any)=>res.json())
    .then((data:any)=>{
      dispatch(successRequestRobots(data))
      return data
    })
    .catch((error:any)=> dispatch(errorRequestRobots(error)))
}
