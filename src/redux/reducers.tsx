import {CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING, 
    REQUEST_ROBOTS_ERROR} from './types'

//Single source of truth
//State is read only
//Changes using pure functions

interface IAction{
    type?:string;
    payload?:any
}

const initialState = {
    searchField:""
}

export const searchRobots = (state=initialState,action:IAction ={})=>{
switch(action.type){
    case CHANGE_SEARCH_FIELD:
        return {
            ...state,
            searchField: action.payload
        }
    default:
        return state
}
}


const initialStateRobots = {
    isPending:false,
    robots:[],
    error:null
}

export const requestRobots = (state=initialStateRobots,action:IAction={})=>{
switch(action.type){
    case REQUEST_ROBOTS_SUCCESS:
        return {
            ...state,
            robots: action.payload,
            isPending: false
        }
    case REQUEST_ROBOTS_PENDING:
        return {
            ...state,
            isPending: true
        }
    case REQUEST_ROBOTS_ERROR:
        return {
            ...state,
            error: action.payload,
            isPending: false
        }
    default:
        return state
}
}